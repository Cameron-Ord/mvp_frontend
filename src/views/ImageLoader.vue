<template>
    <div>
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

</style>