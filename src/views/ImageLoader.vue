<template>
    <div class="image_loader_parent_div">
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
    export default {

        components:{

            ImageSupplier,
            HeaderCompImage,
            FooterCompImage

        },

        data() {
            return {
               
            }
        },


        mounted(){


        },




        methods:{

        },
        
    }
</script>

<style lang="scss" scoped>
.image_loader_parent_div{

    background-image: url('~@/assets/DSCF4028.JPG');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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