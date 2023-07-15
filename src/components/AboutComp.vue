<template>
    <div>
        <article class="about_article">
            <span>

                <div class="aboutHeaderDiv"><h1>About me</h1></div>

                <div class="aboutContentDiv">
                    <div>
                        <p> Hi, my name's Cameron. I am a Web Developer, and this is my personal photography portfolio website.</p>
                    </div>

                    <div>
                        <p>You can find all my work in the galleries <router-link to="/PhotoStream" class="routerStream">here</router-link> </p>
                    </div>
                    <div>
                        <p>If you wish to contact me for any purpose, you can submit a message or directly email me. My contact information is <router-link to="/ContactPage" class="routerStream">here</router-link></p>
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
@keyframes fadeIn {
0% {opacity: 0;}
100% {opacity: 1}
}
.about_article.hide_about{

    opacity: 0;
}

.about_article{

    display: grid;
    align-items: center;
    justify-items: center;
    transition: 0.3s ease-in-out;
    grid-template-rows: 1fr 300px;

    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
    >span{
        
        display: grid;
        align-items: center;
        justify-items: center;
        text-align: center;
        grid-template-rows: 1fr 1fr;
        padding: 5px;
        border-radius: 10px;

        >.aboutHeaderDiv{

            display: grid;
            align-items: center;
            justify-items: center;
            text-align: center;
            padding: 10px;
            border-radius: 10px;
            background-color: rgba($color: #6B9080, $alpha: 0.80);
            >h1{

                color: #F6FFF8;

                font-size: 2.5em;

                border-bottom: #F6FFF8 solid 1px;
            }

        }

        >.aboutContentDiv{
            background-color: rgba($color: #F6FFF8, $alpha: 0.80);
            display: grid;
            align-items: center;
            justify-items: center;
            text-align: center;
            padding: 20px;
            border-radius: 10px;
            width: 80%;

            grid-template-rows: 1fr 1fr 1fr;

            >div{
                background-color: rgba($color: #6B9080, $alpha: 0.80);
                padding: 10px;
                border-radius: 10px;
                >p{

                letter-spacing: 1px;
                
                color: #F6FFF8;

                >.routerStream{

                    font-weight: bolder;
                    text-decoration: none;
                    color: #EAF4F4;
                    cursor: pointer;
                    border-bottom: #EAF4F4 solid 1px;
                }
                }
            }
        }
    }
}
@media only screen and (min-width: 770px){

.about_article{

>span{


    width: 50%;


    >h1{
   
    }

    >p{


        
    }
}
}
}

@media only screen and (min-width: 1024px){

.about_article{

>span{


    width: 58%;


    >h1{
   
    }

    >p{


        
    }
}
}


}
</style>