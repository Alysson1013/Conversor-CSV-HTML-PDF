const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")
const Writer = require("./Writer")

const reader =  new Reader();
const writer = new Writer();

async function main(){
    let data = await reader.read("./Mock.csv")
    data = Processor.Process(data)
    let usuarios = new Table(data)

    let html = await HtmlParser.Parse(usuarios)
    
    writer.Write(`${Date.now()}.html`, html)
}

main()