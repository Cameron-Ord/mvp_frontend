<template>
    <div class="photostream_container">
        <header-comp-main></header-comp-main>
                        <main class="photo_stream_page">
                            <summer-pictures></summer-pictures>


                        </main>
        <footer-comp-main></footer-comp-main>
    </div>
</template>

<script>
import FooterCompMain from '@/components/FooterCompMain.vue';
import HeaderCompMain from '@/components/HeaderCompMain.vue';
import SummerPictures from '@/components/SummerPictures.vue';
    export default {


        components:{
            HeaderCompMain,
            FooterCompMain,
            SummerPictures
        },


        mounted(){

            this.delete_classes();

        },

        methods:{

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
.photostream_container{

    background-image: url('~@/assets/DSC_3473.JPG');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.photo_stream_page{

    min-height: 80vh;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: repeat(auto-fit, minmax(250, 1fr));
}

</style>