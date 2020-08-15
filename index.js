const readline = require("readline")
const prompt = require('prompt-sync')();
const fs = require("fs")

const appendtofile = (name) =>{
    fs.appendFile("Readme.md",name+"\n",(err)=>{
        if(err) throw err
        
    })
    
}


const title = prompt("Enter project title: ")
appendtofile(title)
const description = prompt("Enter project description: ")
appendtofile(description)
const installation = prompt("describe your project: ")
appendtofile(installation)
const license = prompt("Enter license: ")
appendtofile(license)

console.log("contents saved successfully")

