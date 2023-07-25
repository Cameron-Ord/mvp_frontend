<template>
    <div class="image_loader_parent_div" v-if="cookie_holder !== null">
        <header-comp-main></header-comp-main>
                <main class="image_main">
                    <section>
                        <image-supplier></image-supplier>
                    </section>
                </main>
        <footer-comp-main></footer-comp-main>
    </div>
</template>

<script>
import ImageSupplier from '@/components/ImageSupplier.vue';
import HeaderCompMain from '@/components/HeaderCompMain.vue';
import FooterCompMain from '@/components/FooterCompMain.vue';
import Cookies from 'vue-cookies';
    export default {

        components:{

            ImageSupplier,
            HeaderCompMain,
            FooterCompMain

        },

        data() {
            return {
               cookie_holder: undefined
            }
        },


        mounted(){

            //calling functions and setting variables

            this.assign_style();
            this.cookie_holder = Cookies.get('photo_type');

        },




        methods:{

            assign_style(){

                //modifying style for this page

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

            
        },
        
    }
</script>

<style lang="scss" scoped>
.image_loader_parent_div{

    background-color: rgba($color: #CCE3DE, $alpha: 1);
}

.image_main{

    display:grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
    min-height: 80vh;

    >section{

        display:grid;
        align-items: center;
        justify-items: center;        
        grid-template-rows: auto;
    }
}
@media only screen and (min-width: 770px){

    .image_main{

        grid-template-rows: repeat(auto-fit, minmax(480, 1fr));
    }
}
@media only screen and (min-width: 1024px){
    .image_main{

        grid-template-rows: repeat(auto-fit, minmax(770, 1fr));
    } 
}
</style>