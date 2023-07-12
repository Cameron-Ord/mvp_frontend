<template>
    <div class="photostream_container">
        <header-comp-main></header-comp-main>
                        <main class="photo_stream_page">
                            <section class="photo_stream_section">
                            <summer-pictures></summer-pictures>
                            <black-white-pictures></black-white-pictures>
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
import Cookies from 'vue-cookies';
    export default {


        components:{
            BlackWhitePictures,
            HeaderCompMain,
            FooterCompMain,
            SummerPictures
        },


        mounted(){

            this.delete_classes();

            this.delete_cookies();

        },

        methods:{

            delete_cookies(){
                Cookies.remove('stored_int');
                Cookies.remove('photo_type');
            },

            delete_classes(){
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

    background-color: rgba($color: #FFF, $alpha: 1);

}  
.photo_stream_page{
    

    min-height: 80vh;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: repeat(auto-fit, minmax(250, 1fr));

    >.photo_stream_section{

        display: grid;
        align-items: center;
        justify-items: center;
        margin-top: 50px;
        transition: 0.3s ease-in-out;
        grid-template-rows: 1fr 1fr;
  

    }


}
@media only screen and (min-width: 770px){


}
@media only screen and (min-width: 1024px){

.photo_stream_page{

min-height: 80vh;
display: grid;
align-items: center;
justify-items: center;
grid-template-rows: repeat(auto-fit, minmax(770, 1fr));

>.photo_stream_section{

    display: grid;
    align-items: center;
    justify-items: center;
    margin-top: 50px;
    transition: 0.3s ease-in-out;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;


}


}
}


</style>