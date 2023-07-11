<template>
    <div class="image_loader_parent_div" v-if="cookie_holder !== null">
        <header-comp-image></header-comp-image>
                <main>
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

                    let bg_selection = document.querySelector('.image_loader_parent_div');
                    let header_selection = document.querySelector('.page_header_image');
                    let footer_selection = document.querySelector('.page_footer_image');

                    bg_selection['style']['background-color'] = '#F7F7F2';
                    header_selection['style']['background-color'] = 'rgba(137, 152, 120, 0.85)';
                    footer_selection['style']['background-color'] = 'rgba(137, 152, 120, 0.85)';

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
    }
}
</style>