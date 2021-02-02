class Table{
    constructor(arr){
        this.header = arr[0]
        this.rows = arr.slice(1,arr.length)
    }

    get CountRows(){
        return this.rows.length
    }

    get CountColumns(){
        return this.header.length
    }
}

module.exports = Table