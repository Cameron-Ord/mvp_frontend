<template>
    <div class="over_div">
        <div class="divtacular">
            <div class="article_container" v-if="stored_images !== undefined">
                <article class="image_container" v-for="(image, i) in stored_images" :key="i">
                    <span>

                        <img :src="image">

                    </span>
            </article>
        </div>

        <div class="load_btn_div">

            <p class="load_button" @click="handle_images">Load more images</p><p class="back_button" @click="back_button">Go back</p>

        </div>
        
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
                stored_date: undefined
            }
        },

        mounted(){

            this.get_images();
         
      
        },


        methods:{

            back_button(){

                Cookies.remove('stored_int');
                this.$router.go();

            },

            handle_images(){

                this.get_created_at();
               
                this.get_images();

            },


            get_images(){

                let type_get = Cookies.get('photo_type');

                let date_get = Cookies.get('stored_int');

                this.stored_date = Cookies.get('stored_int');

                axios({

                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/images`,
                    params:{

                        created_at: date_get,

                        type: type_get

                    }

                }).then((response =>{

                    this.stored_images = []

                    for (let i = 0; i < response['data'].length; i++) {
                     
                        this.stored_images.push(response['data'][i]['file_path']);
                    }
              
                    

                })).catch((err =>{

                    err;

                }))

            },

            get_created_at(){

                let type_get = Cookies.get('photo_type');

                let date_get = Cookies.get('stored_int');



                axios({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/images-date`,

                    params:{

                        created_at: date_get,

                        type: type_get,

                    }
                }).then((response => {

                    Cookies.set('stored_int', response['data'][0]['created_at']);
                    
                })).catch((error => {

                    error;
                }))

            },



        }
    }
</script>

<style lang="scss" scoped>

.over_div{

    display: grid;
    align-items: center;
    justify-items: center;
}
.load_btn_div{

display: grid;
align-items: center;
justify-items: center;
grid-template-rows: 1fr 1fr;
margin-top: 50px;
width: 100%;

>.back_button{

    text-align: center;

    padding: 5px;
    border-radius: 5px;

    margin-bottom: 5px;
    width: 25%;
    cursor: pointer;
}

>.load_button{


    text-align: center;

    padding: 5px;
    border-radius: 5px;

    margin-bottom: 5px;
    width: 60%;
    cursor: pointer;

}
}
.fade_in{
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
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
        width:90%;
   
        >img{


            width: 90%;
            border-radius: 5px;
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


         
        }
    }
}
}


@media only screen and (min-width: 1024px){
.divtacular{

}


.load_btn_div{

  

>.back_button{

    width: 5.5%;

}

>.load_button{

    width: 10%;

}
}
.article_container{
grid-template-columns: 1fr 1fr;


}
.image_container{



    >span{

   
        >img{


            width: 80%;
            max-width: 1000px;
         
        }
    }
}

}
</style>