class Table{
    constructor(arr){
        this.header = arr[0]
        this.rows = arr.slice(1,arr.length)
    }
}

module.exports = Table