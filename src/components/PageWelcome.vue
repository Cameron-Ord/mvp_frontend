<template>
    <div>
        <article class="nav_welcome">
            <span class="wrapper_span">
                <div class="heading_text">
                    <h1 class="h1_text">Online Portfolio</h1>
                </div>
                <nav class="heading_navigation">
                    <div class="browse_link">
                        <h3 class="h3_text">Browse</h3>
                    </div>
                    <div class="search_div">
                        <input type="text" placeholder="search" class="search_bar">
                    </div>
                </nav>
            </span>
        </article>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav_welcome{

    display: grid;
    justify-items: center;
    align-items: center;
    >.wrapper_span{

        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-rows: 5vh 5vh;
      

        >.heading_text{

            
            display: grid;
            justify-items: center;
            align-items: center;
            color: #FFFFFF;
            font-size: 2em;
            animation: fadeIn 5s;
            -webkit-animation: fadeIn 5s;
            -moz-animation: fadeIn 5s;
            -o-animation: fadeIn 5s;
            -ms-animation: fadeIn 5s;
            >.h1_text{

            }
        }

        >.heading_navigation{

            display: grid;
            justify-items: center;
            align-items: center;
            grid-template-columns: 1fr 1fr;
            >.browse_link{

                display: grid;
                justify-items: center;
                align-items: center;
           
                animation: fadeIn 5s;
                -webkit-animation: fadeIn 5s;
                -moz-animation: fadeIn 5s;
                -o-animation: fadeIn 5s;
                -ms-animation: fadeIn 5s;
                >.h3_text{


                    display: grid;
                    border-bottom: 2px solid #5F4BB6;
                    color: #FFFFFF;
                    font-size: 1.25em;


                }

            }
            >.search_div{

                display: grid;
                justify-items: center;
                align-items: center;
                color: #FFFFFF;
                >.search_bar{

                    animation: fadeIn 5s;
                    -webkit-animation: fadeIn 5s;
                    -moz-animation: fadeIn 5s;
                    -o-animation: fadeIn 5s;
                    -ms-animation: fadeIn 5s;
                }
            }
        }

    }
}

@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1}
}

</style>