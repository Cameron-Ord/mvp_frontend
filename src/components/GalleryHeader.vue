<template>
    <div class="gallery_div">

        <article class="gallery_article">

            <span>
                <h1>PHOTO GALLERIES</h1>
            </span>

        </article>

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

@keyframes fadeIn {
0% {opacity: 0;}
100% {opacity: 1}
}

.gallery_div{

    width: 100%;
}
.gallery_article{

    display: grid;
    align-items: center;
    justify-items: center;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
   

    color: #F6FFF8;
    width: 100%;
    >span{
        border-radius: 10px;
        padding-top: 100px;
        padding-bottom: 100px;
        height: 100px;
        display: grid;
        justify-items: center;
        align-items: center;
        width: 90%;
        background-color: rgba($color: #6B9080, $alpha: 0.95);
        >h1{
            font-size: 1.25em;
        }
    }
}

@media only screen and (min-width: 770px){
.gallery_article{


>span{
    border-radius: 10px;
    width: 80%;

    >h1{
        font-size: 1.50em;
    }
}
}
}

@media only screen and (min-width: 1024px){
.gallery_article{


>span{
    border-radius: 10px;
    width: 45%;

    >h1{

        font-size: 1.75em;
    }
}
}
}
</style>