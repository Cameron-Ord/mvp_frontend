<template>
    
    <div class="divtacular">

        <!--protecting HTML from undefined variables-->

            <div class="article_container" v-if="(stored_images !== undefined && p !== undefined)">
                <article class="image_container">
                    <span>
                        <!--image navigation, goes to next or previous image in array based on which button is clicked-->
                        <div @click="prev" class="previous_image">
                        
                            <div class="prev_bar_1"></div>
                            <div class="prev_bar_2"></div>
                        
                        </div>
                        <div class="image_holder">

                            <!--displays an image object from the stored_images array based off the position of p-->

                        <img :src="stored_images[p]">
                        </div>
                        <div @click="next" class="next_image">
                        
                            <div class="next_bar_1"></div>
                            <div class="next_bar_2"></div>

                        </div>
                    </span>
            </article>
        </div>
        
    </div>

</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {
        data() {
            return {
                stored_images: [],
                stored_type: undefined,
                stored_date: undefined,
                p: undefined
            }
        },

        mounted(){


            //calls function on mount

            this.get_images();
         
      
        },


        methods:{


            //changing p to be the next or previous number in the array on function call

            next() {

                this.p++;

                if (this.p > this.stored_images.length - 1) {

                    this.p = 0;

                }

            },


            prev() {

                this.p--;

                if (this.p < 0) {

                    this.p = this.stored_images.length - 1;
                }

            },




            get_images(){

                //gets images based off the type stored in the cookie

                let type_get = Cookies.get('photo_type');

                axios({

                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/images`,
                    params:{

                        type: type_get

                    }

                }).then((response =>{

                    //pushes all file paths into the stored_images array

                    this.stored_images = []

                    for (let i = 0; i < response['data'].length; i++) {
                     
                        this.stored_images.push(response['data'][i]['file_path']);
                    }
              
                    this.p = 0;

                })).catch((err =>{

                    err;

                }))

            },


        }
    }
</script>

<style lang="scss" scoped>
.next_image{
align-items: center;
justify-items: center;
display: grid;
width: 50px;
height: 50px;
cursor: pointer;
appearance: none;
background: none;
outline: none;
border: none;
border-radius: 50%;

>.next_bar_2{
display: block;
width: 30px;
height: 5px;
transform: rotate(-60deg) translate(6.5px, 10px);
transition: 0.4s;
background-color: #6B9080;
border-radius: 5px;

}
>.next_bar_1{
display: block;
width: 30px;
height: 5px;
transform: rotate(60deg) translate(6.5px, -10px);
transition: 0.4s;
background-color: #6B9080;
border-radius: 5px;
}
}
.previous_image{
align-items: center;
justify-items: center;
display: grid;
width: 50px;
height: 50px;
cursor: pointer;
appearance: none;
background: none;
outline: none;
border: none;


border-radius: 50%;
>.prev_bar_2{
display: block;
width: 30px;
height: 5px;
transform: rotate(-120deg) translate(6.5px, -10px);
transition: 0.4s;
background-color: #6B9080;
border-radius: 5px;

}
>.prev_bar_1{
display: block;
width: 30px;
height: 5px;
transform: rotate(120deg) translate(6.5px, 10px);
transition: 0.4s;
background-color: #6B9080;
border-radius: 5px;

}
}

@keyframes fadeIn {
0% {opacity: 0;}
100% {opacity: 1}
}

.divtacular.hide_display_image{

    opacity: 0;
 
}
.divtacular{
    display: grid;
    align-items: center;
    justify-items: center;
    transition: 0.3s ease-in-out;
}
.article_container{

    display: grid;
    align-items: center;
    justify-items: center;
    grid-auto-flow: row;
    margin-top: 50px;
    margin-bottom: 50px;
    transition: 0.3s ease-in-out;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
}
.image_container{

    display: grid;
    align-items: center;
    justify-items: center;
    
    margin-top: 10px;
    margin-bottom: 10px;

    >span{
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 10vw 1fr 10vw;
        width:90%;
   

        .image_holder{

            display: grid;
            align-items: center;
            justify-items: center;


            >img{
            width: 100%;
            border-radius: 5px;
            }
        }

    }
}

@media only screen and (min-width: 770px){
.load_btn_div{

  

>.back_button{

    width: 12.5%;

}

>.load_button{

    width: 25%;

}
}
.divtacular{

}
.article_container{

}
.image_container{



    >span{

   
        >img{


            width: 100%;

            max-width: 1000px;
         
        }
    }
}
}


@media only screen and (min-width: 1024px){



.next_image{



    &:hover>.next_bar_1{
        padding: 2.5px;
        border-radius: 15px;
   
    }
    &:hover>.next_bar_2{
        padding: 2.5px;
        border-radius: 15px;
        
    }

>.next_bar_2{


}
>.next_bar_1{

}
}
.previous_image{

    &:hover>.prev_bar_1{

    padding: 2.5px;
    border-radius: 15px;

    }
    &:hover>.prev_bar_2{
        padding: 2.5px;
        border-radius: 15px;
    }
>.prev_bar_2{


}
>.prev_bar_1{
}
}

.article_container{



}
.image_container{



    >span{

   
        >.image_holder{


        >img{


            width: 100%;
            max-width: 1200px;
            max-height: 1000px;
         
        }

        }

    }
}

}
</style>