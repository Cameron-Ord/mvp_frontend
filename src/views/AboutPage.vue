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
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    >.about_main{

        display: grid;
        align-items: center;
        justify-items: center;
        min-height: 80vh;
        grid-template-rows: repeat(auto-fit, minmax(250, 1fr));
    }
}

@media only screen and (min-width: 770px){

    .about_main{

        grid-template-rows: repeat(auto-fit, minmax(480, 1fr));
    }
}
@media only screen and (min-width: 1024px){

    .about_main{

        grid-template-rows: repeat(auto-fit, minmax(770, 1fr));
    }
}
</style>