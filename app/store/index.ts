
class Store{
    list = [];

    subscribe(callback){
        this.list.push(callback);
    }
    publish(data){
        this.list.forEach(item=>{
            item(data);
        })
    }
}

export default Store;