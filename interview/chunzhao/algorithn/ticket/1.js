function minconstTickets(days,costs){
    //最后一天
    const lastTravelDay = days[days.length - 1];
    //dp数组
    const dp = new Array(lastTravelDay + 1).fill(0);
    const isTravelDay = new Array(lastTravelDay + 1).fill(false);
    for(let day of days){
        isTravelDay[day] = true;
    }
    for(let i = 1; i <= lastTravelDay; i++){
        if(!isTravelDay[i]){
            dp[i] = dp[i - 1];   
        } 
        else{
            dp[i] = Math.min(dp[i - 1] + costs[0],dp[Math.max(0,i - 7)] + costs[1],dp[Math.max(0,i - 30)] + costs[2]); 
        }
    }
    return dp[lastTravelDay];
}


const days = [1,4,6,7,8,20];
const costs = [2,7,15];
console.log(minconstTickets(days,costs));