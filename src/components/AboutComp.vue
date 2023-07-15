<template>
    <div>
        <article class="about_article">
            <span>

                <div class="aboutHeaderDiv"><h1>About me</h1></div>
                <div class="aboutContentDiv">

                    <p>
                        Hi,
                        my name's Cameron. I am a Web Developer, and this is my personal photography portfolio website. Here you will find 
                        a database full of categorized photos. You can view all my photo galleries by going 
                        to the browse section! If you wish to contact me for any purpose, you can leave a message on the contact page, or directly email me.
                        Thanks for visiting!
                    </p>

                </div>a

            </span>
        </article>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.about_article.hide_about{

    opacity: 0;
}

.about_article{

    display: grid;
    align-items: center;
    justify-items: center;

    transition: 0.3s ease-in-out;
    >span{

        display: grid;
        align-items: center;
        justify-items: start;
        text-align: start;
        grid-template-rows: 6vh 1fr;
        width: 80%;
        background-color: rgba($color: #6B9080, $alpha: 0.70);
        padding: 5px;
        border-radius: 10px;


        >h1{
            margin-left: 10px;
            border-bottom: #F6FFF8 solid 1px;
            color: #F6FFF8;
        }

        >p{

            margin-left: 10px;
            color: #F6FFF8;
            margin-top: 15px;
            margin-bottom: 15px;
            
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