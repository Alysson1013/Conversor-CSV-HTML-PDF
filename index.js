const Reader = require("./Reader")
const Processor = require("./Processor")

const reader =  new Reader();

async function main(){
    let data = await reader.read("./Mock.csv")
    data = Processor.Process(data)
    console.log(data)
}

main()