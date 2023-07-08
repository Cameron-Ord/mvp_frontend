<template>
   
        <div class="page_footer">
            <div class="credits_div">
                <div>
                    <h2>Photography portfolio</h2>
                    <p>Cameron Ord</p>
                </div>
            </div>
            <div class="nav_div">
                <nav>
                    <img src="@/assets/linkedin.png" alt="">
                    <img src="@/assets/Instagram-Icon.png" alt="">
                    <img src="@/assets/facebook.png" alt="">

                </nav>
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
.page_footer.hide_footer{

    opacity: 0;
}
.page_footer{

    background-color: rgba($color: #488286, $alpha: 0.25);
    display: grid;
    align-items: center;
    justify-items: center;
    min-height: 15vh;

    margin-top: 50px;
    transition: 0.3s ease-in-out;
    grid-template-columns: 1fr 1fr;

    >.credits_div{
        justify-items: center;
        align-items: center;
        display: grid;
        color: #DFD9E2;

        >div{

            display: grid;
            grid-template-rows: 1fr 1fr;
            align-items: center;
            justify-items: start;
            text-align: start;


            >p{
                margin-left: 10px;
            }

            >h2{


                font-size: 1em;
                margin-left: 10px;

            }
        }
    }

    >.nav_div{
        display: grid;
        justify-items: center;
        align-items: center;
        color: #DFD9E2;

        >nav{
          
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
            justify-items: end;

            >img{
                margin-left: 5px;
                margin-right: 5px;
                width: 25px;
            }
        }
    }
}

</style>