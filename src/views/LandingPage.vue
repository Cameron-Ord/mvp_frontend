<template>
    <div class="main_container">
        <header-comp-main></header-comp-main>
        <main class="page_main">
            <section class="section_main">
            
                <page-welcome></page-welcome>
            
            </section>
        </main>
        <footer-comp-main></footer-comp-main>
    </div>
</template>

<script>
import HeaderCompMain from '@/components/HeaderCompMain.vue';
import FooterCompMain from '@/components/FooterCompMain.vue';
import PageWelcome from '@/components/PageWelcome.vue';

    export default {
        
        components:{
            HeaderCompMain,
            FooterCompMain,
            PageWelcome,
            
        },

        mounted(){

            //on mount, deletes classes
            this.delete_classes();

        },


        methods:{
            delete_classes(){

                //Deletes classes on call
                
                let menu_btn = document.querySelector(`.hamburger`);

                let mobile_menu = document.querySelector(`.mobile_nav`);

                let get_div = document.querySelector(`body`);

                let hide_bar = document.querySelector('.wrapper_span');

                let search = document.querySelector('.search');

                let input = document.querySelector('.input');

                let clear = document.querySelector('.clear');

                let hide_footer = document.querySelector('.page_footer');

        

                search.classList.remove('active');

                input.classList.remove('input_active');

                clear.classList.remove('clear_active');
                
                menu_btn.classList.remove(`is-active`);
                
                mobile_menu.classList.remove(`is-active`);

                get_div.classList.remove(`no-scroll`);

                hide_bar.classList.remove('hide_bar');

                hide_footer.classList.remove('hide_footer');

       
     
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

    min-height: 80vh;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));

    >.section_main{

        display:grid;
        align-items: center;
        justify-items: center;
        height: 100%;
    }
}
@media only screen and (min-width: 770px){

    .page_main{

        grid-template-rows: repeat(auto-fit, minmax(480px, 1fr));
    }
}
@media only screen and (min-width: 1024px){

    .page_main{
        grid-template-rows: repeat(auto-fit, minmax(770px, 1fr));
    }
}
</style>