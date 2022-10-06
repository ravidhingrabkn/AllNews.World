const express = require("express");
const path = require("path");
const axios = require("axios");
// const string = "Search= Search.value";
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || "8000";


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//set up static path (for use with CSS, client-side JS, and image files)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index",{title: "Home"})
  });

app.get("/Crypto", (req, res) => {
const options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
        'X-RapidAPI-Key': '79d81d8a41mshce1341f3c6cdef9p18d5e5jsn397fb23fd41e',
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
    }
};
axios.request(options).then(function (response) {
    //console.log(response.data);
    res.render("Crypto", { title: "Crypto", crypto:response.data});
}).catch(function (error) {
    console.error(error);
});
});

app.get("/Cricket", (req, res) => {   
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings',
      params: {category: 'batsmen', formatType: 'test', isWomen: '0'},
      headers: {
        'X-RapidAPI-Key': '79d81d8a41mshce1341f3c6cdef9p18d5e5jsn397fb23fd41e',
        'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        //console.log(response.data);
        res.render("Cricket", { title: "Cricket", cricket:response.data.rank});
    }).catch(function (error) {
        console.error(error);
    });
});


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });




