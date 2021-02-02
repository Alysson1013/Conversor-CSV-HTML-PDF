const Reader = require("./Reader")
const reader =  new Reader();

async function main(){
    let data = await reader.read("./Mock.csv")
    console.log(data)
}

main()