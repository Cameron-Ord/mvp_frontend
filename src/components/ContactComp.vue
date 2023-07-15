<template>

    <div class="divParent">


        <article class="contact_header">
                <span>
                <h1>CONTACT ME</h1>
                </span>
        </article>


        <article class="contact_article">

            <span class="inputSpan">
                <div class="inputDiv">


                    <div class="innerDiv">
                    <p>Your Name</p>
                    <input class="inputTag" type="text" ref="emailName">
                    </div>

                    <div class="innerDiv">
                    <p>Your Email</p>
                    <input class="inputTag" type="text" ref="emailEmail">
                    </div>

                    <div class="innerDivBox">
                    <p>Your message</p>
                    <textarea class="inputTagBox" cols="30" rows="10" maxlength="300" ref="messageContent"></textarea>
                    </div>

                    <div class="orDiv">
                        <h3>OR</h3>
                    </div>
                
                    <div class="emailDiv">
                    <h3>Direct Email me</h3>
                    <img src="~@/assets/jean-victor-balin-icon-letter-mail.svg">
                    </div>

                </div>  
            </span>
        </article>

    </div>

</template>

<script>
    export default {
        
    }
</script>


<style lang="scss" scoped>

.divParent{

    display: grid;
    align-items: center;
    justify-items: center;

    width: 100%;

}
.contact_article.hide_contact_info{

    opacity: 0;
}

.contact_header{
    margin-top: 25px;
            
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 1fr 1fr;
    
    >span{
    
        display: grid;
        align-items: center;
        justify-items: center;
        background-color: rgba($color: #6B9080, $alpha: 0.80);
        padding: 10px;
        border-radius: 10px;
            >h1{
                font-weight: bold;
                font-size: 2em;
                margin-bottom: 15px;
                margin-top: 15px;
                color: #F6FFF8;
                border-bottom: #F6FFF8 solid 1px;

            }
        }
}

.contact_article{
    margin-bottom: 25px;
    transition: 0.3s ease-in-out;
    display: grid;
    align-items: center;
    justify-items: center;

    width: 100%;


    >.inputSpan{

        display: grid;
        align-items: center;
        justify-items: center;
     
        width: 100%;
   


        >.inputDiv{

            display: grid;
            align-items: center;
            justify-items: center;
            grid-template-rows: 12vh 12vh 18vh 12vh 14vh;
            text-align: center;
            background-color: rgba($color: #F6FFF8, $alpha: 0.70);
            width: 70%;
            
            padding: 10px;
            border-radius: 10px;
            >.orDiv{

            grid-template-rows: 8vh;
            display: grid;
            align-items: center;
            justify-items: center;
            width: 75px;

            border-radius: 50%;
            background-color: rgba($color: #6B9080, $alpha: 0.80);
            >h3{
                border-bottom: #F6FFF8 solid 1px;
                font-weight: bold;
                color: #F6FFF8;
            }
        }

            >.emailDiv{
            background-color: rgba($color: #6B9080, $alpha: 0.80);
            grid-template-rows: 4vh 6vh;
            padding: 10px;
            border-radius: 10px;

            display: grid;
            align-items: center;
            justify-items: center;


            >h3{
                font-weight: bold;
                color: #F6FFF8;
            }

            >img{
                width: 50px;
                cursor: pointer;
            }
        }
            >.innerDivBox{
                
                display: grid;
                align-items: center;
                justify-items: center;
                grid-template-rows: 4vh 10vh;
                background-color: rgba($color: #6B9080, $alpha: 0.80);
                padding: 10px;
                border-radius: 10px;

                >p{

                    color: #F6FFF8;
                    font-weight: bold;

                }
                >.inputTagBox{
                height: 50%;
                width: 100%;
                max-height: 75px;
                max-width:200px;
                }
            }
            >.innerDiv{
                background-color: rgba($color: #6B9080, $alpha: 0.70);
                padding: 10px;
                border-radius: 10px;
                display: grid;
                align-items: center;
                justify-items: center;
                grid-template-rows: 4vh 4vh;
               
                >p{
                    color: #F6FFF8;
                    font-weight: bold;

                }
                >.inputTag{


                };
            }

        }
    }


}
@media only screen and (min-width: 770px){

}
@media only screen and (min-width: 1024px){


}
</style>