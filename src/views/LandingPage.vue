<template>
    <div class="main_container">
        <header-comp></header-comp>
        <main class="page_main">
            <section class="section_main">
                <page-welcome></page-welcome>
                <photo-index></photo-index>

            </section>
        </main>
        <footer-comp></footer-comp>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import PageWelcome from '@/components/PageWelcome.vue';
import PhotoIndex from '@/components/PhotoIndex.vue';
    export default {
        
        components:{
            HeaderComp,
            FooterComp,
            PageWelcome,
            PhotoIndex
        },

        mounted(){

            this.delete_classes();

        },


        methods:{
            delete_classes(){
                
                let menu_btn = document.querySelector(`.hamburger`);

                let mobile_menu = document.querySelector(`.mobile_nav`);

                let get_div = document.querySelector(`body`);

                let hide_bar = document.querySelector('.wrapper_span');

                let search = document.querySelector('.search');

                let input = document.querySelector('.input');

                let clear = document.querySelector('.clear');

                search.classList.remove('active');

                input.classList.remove('input_active');

                clear.classList.remove('clear_active');
                
                menu_btn.classList.remove(`is-active`);
                
                mobile_menu.classList.remove(`is-active`);

                get_div.classList.remove(`no-scroll`);

                hide_bar.classList.remove('hide_bar');
            },

        }
    }
</script>

<style lang="scss" scoped>

.main_container{

    background-image: url('~@/assets/DSC_3634.JPG');

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.page_main{

    display: grid;
    justify-items: center;
    align-items: center;
    min-height: 80vh;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    >.section_main{
        display: grid;
        justify-items: center;
        align-items: center;
        width: 100%;
        grid-template-rows: 1fr 1fr;
    }
}
</style>