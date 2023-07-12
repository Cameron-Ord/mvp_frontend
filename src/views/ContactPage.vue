<template>
    <div>
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

</style>