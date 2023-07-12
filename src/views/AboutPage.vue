<template>
    <div class="about_page_div">
        <header-comp-home></header-comp-home>

        <main class="about_main">
            <section class="about_section">

                <about-comp></about-comp>

            </section>
        </main>

        <footer-comp-home></footer-comp-home>
    </div>
</template>

<script>
import AboutComp from '@/components/AboutComp.vue';
import FooterCompHome from '@/components/FooterCompHome.vue';
import HeaderCompHome from '@/components/HeaderCompHome.vue';
    export default {
        components:{

            HeaderCompHome,
            FooterCompHome,
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