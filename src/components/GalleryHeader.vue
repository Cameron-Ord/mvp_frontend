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

.gallery_div{

    width: 100%;
}
.gallery_article{

    display: grid;
    align-items: center;
    justify-items: center;
   
   

    color: #F7F7F2;
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
        background-color: rgba($color: #7392B7, $alpha: 0.85);
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