<template>
    <div class="image_loader_parent_div" v-if="cookie_holder !== null">
        <header-comp-image></header-comp-image>
                <main class="image_main">
                    <section>
                        <image-supplier></image-supplier>
                    </section>
                </main>
        <footer-comp-image></footer-comp-image>
    </div>
</template>

<script>
import ImageSupplier from '@/components/ImageSupplier.vue';
import HeaderCompImage from '@/components/HeaderCompImage.vue';
import FooterCompImage from '@/components/FooterCompImage.vue';
import Cookies from 'vue-cookies';
    export default {

        components:{

            ImageSupplier,
            HeaderCompImage,
            FooterCompImage

        },

        data() {
            return {
               cookie_holder: undefined
            }
        },


        mounted(){

            this.cookie_holder = Cookies.get('photo_type');
            this.check_cookie_bg();

        },




        methods:{

            check_cookie_bg(){

                let photo_selection = Cookies.get('photo_type');

                if(photo_selection === 'summer'){
                    
                    let icon_selection = document.querySelector('.nav_icon_button');
                    let bg_selection = document.querySelector('.image_loader_parent_div');
                    let header_selection = document.querySelector('.page_header_image');
                    let footer_selection = document.querySelector('.page_footer_image');
                    let bar_1 = document.querySelector('.bar_1');
                    let bar_2 = document.querySelector('.bar_2');
                    let bar_3 = document.querySelector('.bar_3');
                    let load_button = document.querySelector('.load_button');
                    let back_button = document.querySelector('.back_button');
                    let nav_menu = document.querySelectorAll('.nav_menu_image');

                    for(let i=0; i<nav_menu.length; i++){

                    nav_menu[i]['style']['background-color'] = 'rgba(42, 127, 98, 0.65)';
                    nav_menu[i]['style']['color'] = '#F7F7F2';
                    }

                    load_button['style']['background-color'] = 'rgba(42, 127, 98, 0.65)';
                    back_button['style']['background-color'] = 'rgba(42, 127, 98, 0.65)';
                    back_button['style']['color'] = '#F7F7F2';
                    load_button['style']['color'] = '#F7F7F2';
                    bar_1['style']['background-color'] = '#F7F7F2';
                    bar_2['style']['background-color'] = '#F7F7F2';
                    bar_3['style']['background-color'] = '#F7F7F2';
                    icon_selection['style']['color'] = '#F7F7F2';
                    bg_selection['style']['background-color'] = '#F7F7F2';
                    header_selection['style']['background-color'] = 'rgba(42, 127, 98, 0.65)';
                    footer_selection['style']['background-color'] = 'rgba(42, 127, 98, 0.65)';

                }else if(photo_selection === 'black/white'){

                    let icon_selection = document.querySelector('.nav_icon_button');
                    let bg_selection = document.querySelector('.image_loader_parent_div');
                    let header_selection = document.querySelector('.page_header_image');
                    let footer_selection = document.querySelector('.page_footer_image');
                    let bar_1 = document.querySelector('.bar_1');
                    let bar_2 = document.querySelector('.bar_2');
                    let bar_3 = document.querySelector('.bar_3');
                    let load_button = document.querySelector('.load_button');
                    let back_button = document.querySelector('.back_button');
                    let nav_menu = document.querySelectorAll('.nav_menu_image');
                    let make_border = document.querySelector('.image_main')

                    for(let i=0; i<nav_menu.length; i++){

                    nav_menu[i]['style']['background-color'] = 'rgba(255, 255, 255, 1)';
                    nav_menu[i]['style']['color'] = '#000501';
                    }

                    make_border['style']['border-top'] = '1px solid #FFFFFF'
                    make_border['style']['border-bottom'] = '1px solid #FFFFFF'
                    load_button['style']['background-color'] = 'rgba(255, 255, 255, 1)';
                    back_button['style']['background-color'] = 'rgba(255, 255, 255, 1)';
                    back_button['style']['color'] = '#000501';
                    load_button['style']['color'] = '#000501';
                    bar_1['style']['background-color'] = '#F7F7F2';
                    bar_2['style']['background-color'] = '#F7F7F2';
                    bar_3['style']['background-color'] = '#F7F7F2';
                    icon_selection['style']['color'] = '#F7F7F2';
                    bg_selection['style']['background-color'] = 'rgba(51, 51, 51, 1)'
                    header_selection['style']['background-color'] = 'rgba(0, 05, 1, 0.25)';
                    footer_selection['style']['background-color'] = 'rgba(0, 05, 1, 0.25)';

                }

            }
        },
        
    }
</script>

<style lang="scss" scoped>
.image_loader_parent_div{


}

main{

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
</style>