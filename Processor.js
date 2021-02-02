class Processor{
    static Process(data){
        let a = data.split("\r\n")
        let rows = []
        
        a.forEach(row =>{
            var arr = row.split(";")
            rows.push(arr)
        })
        if(rows[rows.length -1][0] == '') rows.pop()
        return rows
    }
}

module.exports = Processor