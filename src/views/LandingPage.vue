<template>
    <div>
        <header-comp></header-comp>

        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
    export default {
        
        components:{
            HeaderComp,
            FooterComp
        }
    }
</script>

<style lang="scss" scoped>

</style>