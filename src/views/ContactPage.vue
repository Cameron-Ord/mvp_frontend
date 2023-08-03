<template>
    <div class="image_bg">
        <header-comp-main></header-comp-main>

        <main class="contact_page">
            <section class="contact_section">

                <contact-comp></contact-comp>
            </section>
        </main>

        <footer-comp-main></footer-comp-main>
    </div>
</template>

<script>
import ContactComp from '@/components/ContactComp.vue';
import FooterCompMain from '@/components/FooterCompMain.vue';
import HeaderCompMain from '@/components/HeaderCompMain.vue';
    export default {
        
        components:{

            ContactComp,
            HeaderCompMain,
            FooterCompMain

            
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

.image_bg{

    background-color: rgba($color: #EAF4F4, $alpha: 1);
    
}
.contact_page{

    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250, 1fr));
    min-height: 100vh;


    >.contact_section{
        display: grid;
        align-items: center;
        justify-items: center;
        width: 100%;
        margin-bottom: 50px;

        
    }
}
@media only screen and (min-width: 770px){
    .contact_page{
        grid-template-columns: repeat(auto-fit, minmax(480, 1fr));
    }
}
@media only screen and (min-width: 1024px){

    .contact_page{
        grid-template-columns: repeat(auto-fit, minmax(770, 1fr));
    }
}
</style>