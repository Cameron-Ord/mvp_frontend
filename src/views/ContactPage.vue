<template>
    <div>
        <header-comp-home></header-comp-home>

        <main class="contact_page">
            <section class="contact_section">

                <contact-comp></contact-comp>
            </section>
        </main>

        <footer-comp-home></footer-comp-home>
    </div>
</template>

<script>
import ContactComp from '@/components/ContactComp.vue';
import FooterCompHome from '@/components/FooterCompHome.vue';
import HeaderCompHome from '@/components/HeaderCompHome.vue';
    export default {
        
        components:{

            ContactComp,
            HeaderCompHome,
            FooterCompHome
        }
    }
</script>

<style lang="scss" scoped>

</style>