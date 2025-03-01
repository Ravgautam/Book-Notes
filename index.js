import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const app= express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Book-Notes",
    password: "", // Enter your database password
    port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let note= [{
    title: "This is demo",
    summary: "This is summary",
    rating: 4,
    image: "https://covers.openlibrary.org/b/olid/OL51694024M-S.jpg",
}];

app.get("/", async(req, res)=>{
    try{
        const result = await db.query("SELECT title, summary, rating, image FROM booksummary");
        note= result.rows;

        res.render("index.ejs", {notes: note});
    }catch(err){
        console.log(err);
    } 
    

    
});

app.post("/add", async (req, res)=>{
    const title= req.body.inputTitle;
    const summary= req.body.inputText;
    const rating = req.body.inputRating;

    //converting title to olid
    const newTitle= title.replace(/ /g, "+").toLowerCase();
    const result = await axios.get("https://openlibrary.org/search.json?title="+newTitle);
    const olid = result.data.docs[0].cover_edition_key;
    const imageLink= "https://covers.openlibrary.org/b/olid/"+olid+"-M.jpg";


    //console.log(title, summary, rating);

   try{
        await db.query("INSERT INTO bookSummary(title, summary, rating, image) VALUES($1, $2, $3, $4)", [title, summary, rating, imageLink]);
        res.redirect("/");
    }catch(err){
        console.log(err);
    } 
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}.`);
});
