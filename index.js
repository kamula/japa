const fs = require("fs")
const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdin
})

//create file
const createfile =(name)=>{
    fs.writeFile("Readme.md",name+"\n",(err)=>{
        if(err) throw err
    })

}
//append content to file
const appendtofile = (name) =>{
    fs.appendFile("Readme.md",name+"\n",(err)=>{
        if(err) throw err
    })
}


readline.question("Enter project name: ",(pname)=>{
    createfile(pname)
    readline.question("Enter installation guide: ",(installation)=>{
        appendtofile(installation)
        readline.question("Enter license: ",(license)=>{
            appendtofile(license)
            readline.close()
        })
    })

    
})