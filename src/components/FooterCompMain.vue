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


@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1}
}

.page_footer{

background-color: rgba($color: #7392B7, $alpha: 0.85);
display: grid;
align-items: center;
justify-items: center;
min-height: 15vh;

transition: 0.3s ease-in-out;
grid-template-columns: 1fr 1fr;

>.credits_div{
    justify-items: center;
    align-items: center;
    display: grid;
    color: #F7F7F2;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;

    >div{

        display: grid;
        grid-template-rows: 1fr 1fr;
        align-items: center;
        justify-items: start;
        text-align: start;


        >p{
         
            margin-left: 10px;
            padding: 5px;
            border-radius: 5px;
        }

        >h2{

            font-size: 1em;
            margin-left: 10px;
            width: 60%;
            padding: 5px;
            border-radius: 5px;

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

        animation: fadeIn 2s;
        -webkit-animation: fadeIn 2s;
        -moz-animation: fadeIn 2s;
        -o-animation: fadeIn 2s;
        -ms-animation: fadeIn 2s;
        >img{
            margin-left: 5px;
            margin-right: 5px;
            width: 25px;
        }
    }
}
}
@media only screen and (min-width: 770px){

.page_footer{

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
@media only screen and (min-width: 1024px){


.page_footer{

>.credits_div{


>div{




    >p{

    }

    >h2{


        font-size: 1.50em;
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
</style>