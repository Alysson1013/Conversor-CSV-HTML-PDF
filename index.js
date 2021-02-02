const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")

const reader =  new Reader();

async function main(){
    let data = await reader.read("./Mock.csv")
    data = Processor.Process(data)
    let usuarios = new Table(data)
    console.log(usuarios.CountRows)
    console.log(usuarios.CountColumns)
}

main()