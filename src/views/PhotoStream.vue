<template>
    <div class="photostream_container">
        <header-comp-main></header-comp-main>
                        <main class="photo_stream_page">
                            <section class="photo_stream_section">
                                <div class="header_sep">   
                                    <gallery-header></gallery-header>
                                    <div class="images_sep">
                                        <summer-pictures></summer-pictures>
                                        <black-white-pictures></black-white-pictures>
                                    </div>
                                </div>
                            </section>
                        </main>
        <footer-comp-main></footer-comp-main>
    </div>
</template>

<script>
import FooterCompMain from '@/components/FooterCompMain.vue';
import HeaderCompMain from '@/components/HeaderCompMain.vue';
import SummerPictures from '@/components/SummerPictures.vue';
import BlackWhitePictures from '@/components/BlackWhitePictures.vue';
import GalleryHeader from '@/components/GalleryHeader.vue';
import Cookies from 'vue-cookies';
    export default {


        components:{
            BlackWhitePictures,
            HeaderCompMain,
            FooterCompMain,
            SummerPictures,
            GalleryHeader
        },


        mounted(){

            //function calls on mount

            this.assign_style();

            this.delete_classes();

            this.delete_cookies();

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

            delete_cookies(){

                //deletes cookies

                Cookies.remove('stored_int');
                Cookies.remove('photo_type');
            },

            delete_classes(){

                //deletes respective classes

                let menu_btn = document.querySelector(`.hamburger`);

                let mobile_menu = document.querySelector(`.mobile_nav`);

                let get_div = document.querySelector(`body`);

                let hide_footer = document.querySelector('.page_footer');
                
                menu_btn.classList.remove(`is-active`);
                
                mobile_menu.classList.remove(`is-active`);

                get_div.classList.remove(`no-scroll`);

                hide_footer.classList.remove('hide_footer');

            },

        }

    }
</script>


<style lang="scss" scoped>


.photo_stream_section.hide_display{

    opacity: 0;
}
.photostream_container{

    background-color: rgba($color: #EAF4F4, $alpha: 1);

}  
.photo_stream_page{
    

    min-height: 80vh;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: repeat(auto-fit, minmax(250, 1fr));

    >.photo_stream_section{

        width: 100%;
        display: grid;
        align-items: center;
        justify-items: center;
        margin-top: 50px;
        transition: 0.3s ease-in-out;
    >.header_sep{
        width: 100%;
        display:grid;
        align-items: center;
        justify-items: center;

        >.images_sep{
        
            transform: translateY(-20px);
            grid-template-rows: 180px 180px;
            display:grid;
            align-items: center;
            justify-items: center;
        }
    }
  

    }


}
@media only screen and (min-width: 770px){
    .photo_stream_page{
    


    grid-template-rows: repeat(auto-fit, minmax(480, 1fr));

    >.photo_stream_section{


    >.header_sep{


        >.images_sep{
        
            transform: translateY(-20px);
            grid-template-rows: 375px 375px;
 
        }
    }
  

    }


}

}
@media only screen and (min-width: 1024px){

.photo_stream_page{

min-height: 80vh;
display: grid;
align-items: center;
justify-items: center;
grid-template-rows: repeat(auto-fit, minmax(770, 1fr));

>.photo_stream_section{
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    margin-top: 50px;
    transition: 0.3s ease-in-out;

    >.header_sep{

        width: 100%;
        display: grid;
        align-items: center;
        justify-items: center;
        >.images_sep{
            width: 100%;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 450px;
            transform: translateY(-40px);
        }
    }


}


}
}


</style>