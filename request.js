const https = require("https");
const fs = require("fs");

//create and write to file
const wfile = (content) => {
  fs.writeFile("download.json", content, (err) => {
    if (err) throw err;
    console.log("data saved");
  });
};

//get request
https
  .get("https://coderbyte.com/api/challenges/json/json-cleaning", (res) => {
    res.on("data", (d) => {
      d = JSON.parse(d);
      delete d.name.middle;
      delete d.DOB;
      delete d.hobbies.pop();
      delete d.education.highschool;
      wfile(JSON.stringify(d));
    });
  })
  .on("error", (e) => {
    console.error(e);
  });
