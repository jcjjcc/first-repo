function polling(url,callback,interval=1000){
    let timer = null;
    const fetchData = ()=>{
       fetch(url)
         .then(res=>res.json())
         .then(data => {
            callback(data);
         })  
    }
    const startPolling = ()=>{
       fetchData();
       timer = setInterval(startPolling,interval); 
    }
    const stopPolling = ()=>{
        clearInterval(timer);
    }
    return {startPolling,stopPolling}
}