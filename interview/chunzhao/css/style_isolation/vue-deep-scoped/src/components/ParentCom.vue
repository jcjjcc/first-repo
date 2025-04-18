<template>
    <div>
        <div class="parent">
            <h2>这是父组件的标题</h2>
            <ChildCom></ChildCom>
        </div>
    </div>
</template>

<script setup>
import ChildCom from './ChildCom.vue';
</script>

<style scoped>
.parent h2{
    color: blue
}

/* .parent >>> .child p{
    color: red;
} */

.parent :deep(.child p) {
    color: red;
}



</style>