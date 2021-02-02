const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")

const reader =  new Reader();

async function main(){
    let data = await reader.read("./Mock.csv")
    data = Processor.Process(data)
    let usuarios = new Table(data)

    let html = await HtmlParser.Parse(usuarios)
    console.log(html)
}

main()