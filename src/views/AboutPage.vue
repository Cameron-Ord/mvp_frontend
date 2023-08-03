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

            this.assign_style()
        },

        methods:{
            assign_style(){

                //assigns a specific style for this page

                let btn_bgc = document.querySelector('.btn_div');
                let icon_bgc = document.querySelector('.nav_icon_button');
                let nav_menu_bgc = document.querySelectorAll('.nav_menu');
                let ws_bgc = document.querySelector('.page_header_ws');
                let footercreds = document.querySelector('.credits_div');
                let footernav = document.querySelector('.nav_div');
                let fscontainer = document.querySelector('.page_footer_ws');

                for(let i=0; i<nav_menu_bgc.length; i++){

                nav_menu_bgc[i]['style']['background-color'] = 'rgba(107, 144, 128, 0.95)';

                }

                fscontainer['style']['background-color'] = 'rgba(107, 144, 128, 0.95)';
                footernav['style']['background-color'] = 'rgba(107, 144, 128, 0.95)';
                footercreds['style']['background-color'] = 'rgba(107, 144, 128, 0.95)';
                btn_bgc['style']['background-color'] = 'rgba(107, 144, 128, 0.95)';
                icon_bgc['style']['background-color'] = 'rgba(107, 144, 128, 0.95)';
                ws_bgc['style']['background-color'] = 'rgba(107, 144, 128, 0.95)';
            },


        }

    }
</script>

<style lang="scss" scoped>
.about_page_div{

    background-color: rgba($color: #EAF4F4, $alpha: 1);

    >.about_main{

        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(250, 1fr));
        min-height: 80vh;
    }
}

@media only screen and (min-width: 770px){

    .about_main{

        grid-template-columns: repeat(auto-fit, minmax(480, 1fr));
    }
}
@media only screen and (min-width: 1024px){

    .about_main{

        grid-template-columns: repeat(auto-fit, minmax(770, 1fr));
    }
}
</style>