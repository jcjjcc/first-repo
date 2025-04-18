
//基础数据类型 typeof 
function filterByType(arr, type) {
     return arr.filter( item =>{
        let itemType = typeof item;// null -> object  基础数据类型  对象除了null 都是object
        if(type === null){
           return item === null;
        }
        if(type === 'object'){
            return item != null && itemType === type;
        }

        if(type === 'array'){
            return Array.isArray(item);
        }
        return itemType === type;
     })

}

