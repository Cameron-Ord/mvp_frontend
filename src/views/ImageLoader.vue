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

        },




        methods:{

            
        },
        
    }
</script>

<style lang="scss" scoped>
.image_loader_parent_div{

    background-color: #70798c;
}

.image_main{

    border-bottom: #f5f1ed 1px solid;
    border-top: #f5f1ed 1px solid;

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