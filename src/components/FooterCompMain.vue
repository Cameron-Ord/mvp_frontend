<template>
   
    <div class="page_footer">
        <nav class="container_">        
            <div class="credits_div">
                <h2>Photography portfolio</h2>
                <p>by</p>
                <p>Cameron Ord</p>
            </div>
            <div class="nav_div">
                <img src="@/assets/linkedin.png" alt="">
                <img src="@/assets/Instagram-Icon.png" alt="">
                <img src="@/assets/facebook.png" alt="">
            </div>
        </nav>
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


@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1}
}

.page_footer{

width: 100%;
display: grid;
align-items: center;
justify-items: center;
min-height: 150px;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
transition: 0.3s ease-in-out;


    >.container_{
        display: grid;
        align-items: center;
        justify-items: center;
        width: 100%;
        grid-template-columns: 2fr 1fr;
        
        >.credits_div{
            justify-items: center;
            align-items: center;
            display: grid;
            color: #F7F7F2;
            background-color: rgba($color: #7392B7, $alpha: 0.85);


            padding: 10px;
            border-radius: 10px;
            width: 75%;


            animation: fadeIn 2s;
            -webkit-animation: fadeIn 2s;
            -moz-animation: fadeIn 2s;
            -o-animation: fadeIn 2s;
            -ms-animation: fadeIn 2s;
        
                >p{
                    font-size: 0.9em;
                    margin-top: 2.5px;
                    margin-bottom: 2.5px;
                }

                >h2{
                    margin-top: 2.5px;
                    margin-bottom: 2.5px;
                    font-size: 0.9em;
                }
            }

        >.nav_div{
            display: grid;
            justify-items: center;
            align-items: center;
            color: #DFD9E2;
            background-color: rgba($color: #7392B7, $alpha: 0.85);
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;

            padding: 10px;
            border-radius: 10px;


            animation: fadeIn 2s;
            -webkit-animation: fadeIn 2s;
            -moz-animation: fadeIn 2s;
            -o-animation: fadeIn 2s;
            -ms-animation: fadeIn 2s;
                
            >img{
            
                margin-top: 5px;
            
                margin-bottom: 5px;
            
                margin-left: 5px;
            
                margin-right: 5px;
            
                width: 25px;
            
            }
            
        }
    }
}
@media only screen and (min-width: 770px){

.page_footer{

    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    >.container_{
        >.credits_div{


        >div{




            >p{

            }

            >h2{


                font-size: 1.25em;
                margin-left: 10px;

            }
        }
        }

        >.nav_div{


        >nav{
        

            >img{

            }
        }
        }
    }
}

}
@media only screen and (min-width: 1024px){


.page_footer{
    min-height: 125px;
    background-color: rgba($color: #7392B7, $alpha: 0.85);
    grid-template-columns: repeat(auto-fit, minmax(770px, 1fr));
    width: 100%;

    >.container_{

        grid-template-columns: 3fr 1fr;
        >.credits_div{

            width: 100%;
            background-color: rgba($color: #7392B7, $alpha: 0);

        >div{

            width: 80%;
            grid-template-rows: 1fr 1fr 1fr;

            align-items: start;
            justify-items: start;
            text-align: start;
            >p{
            align-items: start;
            justify-items: start;
            text-align: start;
            }

            >h2{
            align-items: start;
            justify-items: start;
            text-align: start;
            margin-left: 0px;

            }
        }
        }
    

        >.nav_div{


            width: 100%;
            background-color: rgba($color: #7392B7, $alpha: 0);
        >nav{
            width: 25%;

            grid-template-columns: 1fr 1fr;
        
            grid-template-rows: 1fr 1fr;

            >img{

                margin-top: 10px;
            }
        }
        }
    }
}

}
</style>