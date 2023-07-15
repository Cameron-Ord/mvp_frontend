<template>
<div class="footersContainer">   
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
    <div class="page_footer_ws">
        <nav class="container_ws">        
            <div class="credits_div_ws">
                <h2>Photography portfolio</h2>
                <p>by</p>
                <p>Cameron Ord</p>
            </div>
            <div class="nav_div_ws">
                <img src="@/assets/linkedin.png" alt="">
                <img src="@/assets/Instagram-Icon.png" alt="">
                <img src="@/assets/facebook.png" alt="">
            </div>
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

.footersContainer{
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
}
.page_footer.hide_footer{

opacity: 0;
}


@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1}
}


.page_footer_ws{

    display: none;
}

.page_footer{
background-color: rgba($color: #6B9080, $alpha: 0);
width: 100%;
display: grid;
align-items: center;
justify-items: center;
min-height: 150px;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
transition: 0.3s ease-in-out;

animation: fadeIn 2s;
-webkit-animation: fadeIn 2s;
-moz-animation: fadeIn 2s;
-o-animation: fadeIn 2s;
-ms-animation: fadeIn 2s;

    >.container_ws{

    display: none;
    }
    >.container_{
        display: grid;
        align-items: center;
        justify-items: center;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        
        >.credits_div{
            justify-items: center;
            align-items: center;
            display: grid;
            color: #F6FFF8;
            background-color: rgba($color: #6B9080, $alpha: 0.80);
            grid-template-rows: 1fr 1fr 1fr;
            padding: 10px;
            border-radius: 10px;
            width: 70%;
            text-align: center;
            height: 80px;
        
                >p{
                    font-size: 0.8em;
             
                }

                >h2{
                              
                    font-size: 0.8em;
                }
            }

        >.nav_div{
            display: grid;
            justify-items: center;
            align-items: center;
            color: #F6FFF8;
            background-color: rgba($color: #6B9080, $alpha: 0.80);
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;

            padding: 10px;
            border-radius: 10px;

            width: 70%;
            height: 80px;
                
            >img{
            
                margin-top: 5px;
            
                margin-bottom: 5px;
            
                margin-left: 5px;
            
                margin-right: 5px;
         
    
            
                width: 25px;
                max-width: 25px;
            }
            
        }
    }
}
@media only screen and (min-width: 770px){

.page_footer{
    display: none;
}

.page_footer_ws{
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    width: 100%;
    background-color: rgba($color: #6B9080 , $alpha: 0.70);
    min-height: 150px;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
        
    >.container_ws{
        display: grid;
        align-items: center;
        justify-items: center;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        >.credits_div_ws{
            
            display:grid;
            align-items: start;
            justify-items: start;
            width: 50%;
            background-color: rgba($color: #6B9080, $alpha: 0);

            >p{
            align-items: start;
            justify-items: start;
            text-align: start;
            font-size: 1em;
            color: #F6FFF8;

            margin-top: 2px;
            margin-bottom: 2px;
            }

            >h2{
            color: #F6FFF8;
            align-items: start;
            justify-items: start;
            text-align: start;
            margin-left: 0px;
            margin-top: 2px;
            margin-bottom: 2px;
            font-size: 1em;

            }
        }
    

        >.nav_div_ws{

            width: 25%;
            display: grid;
            align-items: center;
            justify-items: center;
            background-color: rgba($color: #6B9080, $alpha: 0);
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;

            >img{

                width: 25px;
                margin-top: 10px;
            }
       
        }
    }
}


}
@media only screen and (min-width: 1024px){
.page_footer{
display: none;
}

.page_footer_ws{

    display: grid;
    align-items: center;
    justify-items: center;
    min-height: 100px;
    grid-template-columns: repeat(auto-fit, minmax(770px, 1fr));
    width: 100%;
    background-color: rgba($color: #6B9080 , $alpha: 0.70);
    min-height: 150px;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
    >.container_ws{
        display: grid;
        align-items: center;
        justify-items: center;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        >.credits_div_ws{
            
            display:grid;
            align-items: start;
            justify-items: start;
            width: 40%;
            background-color: rgba($color: #6B9080, $alpha: 0);

            >p{
            align-items: start;
            justify-items: start;
            text-align: start;
            font-size: 1em;
            color: #F6FFF8;

            margin-top: 2px;
            margin-bottom: 2px;
            }

            >h2{
            color: #F6FFF8;
            align-items: start;
            justify-items: start;
            text-align: start;
            margin-left: 0px;
            margin-top: 2px;
            margin-bottom: 2px;
            font-size: 1em;

            }
        }
    

        >.nav_div_ws{

            width: 15%;
            display: grid;
            align-items: center;
            justify-items: center;
            background-color: rgba($color: #6B9080, $alpha: 0);
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;

            >img{

                width: 25px;
                margin-top: 10px;
            }
       
        }
    }
}

}
</style>