<template>
    <div class="image_bg">
        <header-comp-main></header-comp-main>

        <main class="contact_page">
            <section class="contact_section">

                <contact-comp></contact-comp>
            </section>
        </main>

        <footer-comp-main></footer-comp-main>
    </div>
</template>

<script>
import ContactComp from '@/components/ContactComp.vue';
import FooterCompMain from '@/components/FooterCompMain.vue';
import HeaderCompMain from '@/components/HeaderCompMain.vue';
    export default {
        
        components:{

            ContactComp,
            HeaderCompMain,
            FooterCompMain
        }
    }
</script>

<style lang="scss" scoped>

.image_bg{

    display: grid;
    align-items: center;
    justify-items: center;


    background-image: url('~@/assets/DSC_3749.JPG');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.contact_page{

    display: grid;
    align-items: center;
    justify-items: center;
    min-height: 80vh;
    
    grid-template-rows: repeat(auto-fit, minmax(250, 1fr));
}
@media only screen and (min-width: 770px){
    .contact_page{
        grid-template-rows: repeat(auto-fit, minmax(480, 1fr));
    }
}
@media only screen and (min-width: 1024px){

    .contact_page{
        grid-template-rows: repeat(auto-fit, minmax(770, 1fr));
    }
}
</style>