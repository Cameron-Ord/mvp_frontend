<template>
    <div class="main_container">
        <header-comp></header-comp>
        <main class="page_main">


        </main>
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

.main_container{

    background-image: url('~@/assets/DSC_3634.JPG');

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.page_main{

    display: grid;
    min-height: 80vh;
}
</style>