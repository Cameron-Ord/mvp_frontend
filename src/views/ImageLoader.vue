<template>
    <div class="image_loader_parent_div">
        <header-comp-main></header-comp-main>
                <main>
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
    export default {

        components:{

            ImageSupplier,
            HeaderCompMain,
            FooterCompMain

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