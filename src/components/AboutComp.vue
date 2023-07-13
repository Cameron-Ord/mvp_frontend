<template>
    <div>
        <article class="about_article">
            <span>

                <h1>About me:</h1>

                <p>This is my personal Photography website where I host pictures that I take.
                    You can click the browse on the top of the page to take a look at all the photos I have on the site.
                    If want to get in contact business or otherwise, my information is on my contact page!
                </p>
            </span>
        </article>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.about_article{

    display: grid;
    align-items: center;
    justify-items: center;

    >span{

        display: grid;
        align-items: center;
        justify-items: center;
        text-align: center;
        grid-template-rows: 8vh 1fr;
        width: 80%;
        background-color: rgba($color: #FFFFFF, $alpha: 1.0);
        padding: 5px;
        border-radius: 10px;


        >h1{


        }

        >p{

            margin-top: 15px;
            margin-bottom: 15px;
            
        }
    }
}

</style>