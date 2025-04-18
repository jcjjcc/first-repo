<template>
  <div>
    <div class="container" ref="containerRef">
    </div>
    <div class="home">
      <div class="content">
        <div class="words">选择车身颜色</div>
        <div class="select">
          <!-- v-for 指令 不推荐 key绑定index -->
          <div 
            class="select-item"
            v-for="(item, index) in colors"
            :key="index"
            @click="selectColor(item.color)"
          >
            <div class="select-item-color" :style="{background:item.color}"></div>
            <div class="select-item-color-name">{{item.name}}</div>
          </div>
        </div>
        <div class="words">选择贴膜材质</div>
      </div>
    </div>
  </div>
</template>

<!-- setup语法 -->
<script setup>
import { ref , onMounted} from 'vue'
//three.js canvans 挂载点
//vue中 直接js操作dom不优雅，使用ref获取dom节点
//一开始为null，因为没挂载
//组件也是一个对象
const containerRef = ref(null) //响应式DOM元素

// 选项式api看起来虽然简单，但是在写大型项目时，语法性的隔离，
//一个逻辑可能要在data、methods、computed、watch等多个地方写,
// 不利于维护
// 组合式api 把相关逻辑的代码放在一起

// 车颜色
let colors = [
  {
    name: "冷光银",
    color: "#424449"
  },
  {
    name: "经典黑",
    color: "black"
  },
  {
    name: "深海蓝",
    color: "#000f4a"
  },
  {
    name: "中国红",
    color: "#bd050f"
  },
  {
    name: "珍珠白",
    color: "white"
  }
];

const  selectColor = color => {

}


onMounted(() => {
   console.log
})
</script>

<!-- scoped 随机的哈希值 data-v-hash值 再配合属性选择器  -->
<style lang="stylus" scoped>

</style>