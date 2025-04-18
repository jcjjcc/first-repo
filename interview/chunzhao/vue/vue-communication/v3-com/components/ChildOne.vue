<template>
    <div>
        ChildOne
        <div>{{msg1}}</div>
        <div>{{msg2}}</div>
    </div>
</template>

<script>
export default {
    props:["msg1", "msg2"],
    setup(props) {
        console.log(props.msg1);
        console.log(props.msg2); 
    }
}
</script>

<style scoped>

</style>