
function measureRederTime(){
    //性能优化API performance
    const startTIme = performance.now();

    const firstElement = document.querySelector('.flex-item');

    const checkFirstRendered = setInterval(()=>{
         if(firstElement.offsetHeight > 0 && firstElement.offsetWidth > 0){
            clearInterval(checkFirstRendered);
            const firstRenderTime = performance.now() - startTIme;
            console.log(`first render time: ${firstRenderTime}ms`);
         }
    },50)

}

measureRederTime();