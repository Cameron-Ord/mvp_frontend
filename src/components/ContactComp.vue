<template>

        <article class="contact_article">

            <span>

                <span>
                <h1>CONTACT INFORMATION:</h1>
                </span>

                <div>
                <h3>Phone number</h3>
                <p>(587)-990-0854</p>
                </div>

                <div>
                <h3>Email</h3>
                <p>Cameron.Ian.Ronald.Ord@outlook.com</p>
                </div>

            </span>
        </article>


</template>

<script>
    export default {
        
    }
</script>


<style lang="scss" scoped>
.contact_article.hide_contact_info{

    opacity: 0;
}
.contact_article{

    transition: 0.3s ease-in-out;
    display: grid;
    align-items: center;
    justify-items: center;


    >span{
        display: grid;
        align-items: center;
        justify-items: center;
        background-color: rgba($color: #6B9080, $alpha: .80) ;

        padding: 20px;
        border-radius: 10px;
        >span{

            display: grid;
            align-items: center;
            justify-items: center;

            >h1{
                margin-bottom: 15px;
                margin-top: 15px;
                color: #F6FFF8;
            }
        }

        >div{

            display: grid;
            align-items: center;
            justify-items: center;
            grid-template-rows: 1fr 1fr;

            >h3{

                border-bottom: #F6FFF8 solid 1px;
                margin-bottom: 5px;
                margin-top: 5px;
                color: #F6FFF8;
            }
            >p{
                margin-bottom: 5px;
                margin-top: 5px;
                color: #F6FFF8;
            }

        }
    }
}

</style>