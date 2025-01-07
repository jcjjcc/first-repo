<template>
    <div class="container">
        <!-- 导航
        html5语义化标签 -->
        <nav class="nav">
            <div class="time">{{ localTime }}</div>
            <div class="city">切换城市</div>
        </nav>

        <main class="city-info">
            <div class="city-name">{{ weatherData.city }}</div>
            <div class="weather">{{ weatherData.weather }}</div>
            <h2 class="temp">
                <em>{{ weatherData.temperature }}</em>
            </h2>
            <div class="detail">
                <span>风力：{{ weatherData.windPower }}</span>
                <span>风向：{{ weatherData.windDirection }}</span>
                <span>空气湿度：{{ weatherData.humidity }}</span>
            </div>
        </main>
    </div>
</template>

<script setup>
import {ref, onMounted } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'
const localTime = ref("00:00-------------------")
const weatherData = ref({

    city: '抚州',
    weather: '小雨',
    temperature: '30',
    windPower: '41',
    windDirection: '3',
    humidity: '23'
})

const init_map=()=>{

  AMapLoader.load({
    key:"ed8d777d90a37b7dfc746f84bfa6497f",
    version:"2.0",
    plugins:['AMap.CitySearch']
  }).then(AMap=>{
    AMap.plugin('AMap.CitySearch',function(){
      let CitySearch=new AMap.CitySearch();
      CitySearch.getLocalCity(function(status,result){
        if(status=='complete' && result.info==='OK'){
          console.log(result)
          weatherData.value.city=result.city
        }
      })
    })
  })
}

onMounted(() => {
    init_map()
    setInterval(() => {
        localTime.value = new Date().toLocaleTimeString();
    }, 1000);
})

    // init_map()
    // setInterval(() => {
    //     localTime.value = new Date().toLocaleTimeString();
    // }, 1000);

</script>

<style scoped>
.container {
    min-height: 100vh;
    background-color: #000;
    color: white;
    opacity: 0.6;
}
.nav {
    overflow: auto;
    padding: 10px;
}
.city {
    float: right;
}
.time {
    float: left;
}
.city-info {
    text-align: center;
}
.temp {
    font-size: 26px;
}
.temp em{
    font-size: 34px;
}



</style>