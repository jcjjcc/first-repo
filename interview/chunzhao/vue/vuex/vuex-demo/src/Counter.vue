<template>
    <div>
        
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore()
const count = computed(()=>store.state.count)
const increment = ()=>{
    store.commit('increment')
}

</script>

<style scoped>

</style>