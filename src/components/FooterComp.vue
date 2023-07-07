<template>
    <div class="footer_parent">
        <div class="page_footer">
            <div class="credits_div">
                <div>
                    <p>PLACEHOLDER</p>
                    <p>PLACEHOLDER</p>
                    <p>PLACEHOLDER</p>
                    <p>PLACEHOLDER</p>

                </div>
            </div>
            <div class="nav_div">
                <nav>
                    <p>PLACEHOLDER</p>
                    <p>PLACEHOLDER</p>
                    <p>PLACEHOLDER</p>
                    <p>PLACEHOLDER</p>
                </nav>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

.page_footer{

    display: grid;
    align-items: center;
    justify-items: center;
    min-height: 10vh;

    grid-template-columns: 1fr 1fr;

    >.credits_div{
        justify-items: center;
        display: grid;
        color: white;
    }

    >.nav_div{
        display: grid;
        justify-items: center;
        color: white;
    }
}

</style>