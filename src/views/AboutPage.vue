<template>
    <div class="about_page_div">
        <header-comp-main></header-comp-main>

        <main class="about_main">
            <section class="about_section">

                <about-comp></about-comp>

            </section>
        </main>

        <footer-comp-main></footer-comp-main>
    </div>
</template>

<script>
import AboutComp from '@/components/AboutComp.vue';
import FooterCompMain from '@/components/FooterCompMain.vue';
import HeaderCompMain from '@/components/HeaderCompMain.vue';
    export default {
        components:{

            HeaderCompMain,
            FooterCompMain,
            AboutComp
        },

        mounted(){

        },

        methods:{

        }

    }
</script>

<style lang="scss" scoped>
.about_page_div{

    background-image: url('~@/assets/DSCF4035.JPG');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    >.about_main{

        display: grid;
        align-items: center;
        justify-items: center;
        min-height: 80vh;
    }
}
</style>