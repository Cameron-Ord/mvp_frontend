<template>
    <div>
        <header-comp-main></header-comp-main>

        <main class="sekret_page">
            <section>

                <sekret-comp></sekret-comp>

            </section>
        </main>

        <footer-comp-main></footer-comp-main>
    </div>
</template>

<script>
import FooterCompMain from '@/components/FooterCompMain.vue';
import HeaderCompMain from '@/components/HeaderCompMain.vue';
import SekretComp from '@/components/SekretComp.vue';
    export default {
        
        components:{
            SekretComp,
            FooterCompMain,
            HeaderCompMain
        }
    }
</script>

<style lang="scss" scoped>
.sekret_page{

    min-height: 80vh;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>