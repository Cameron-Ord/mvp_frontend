<template>
    <div class="article_container" v-if="stored_images !== undefined">
        <article class="image_container" v-for="(image, i) in stored_images" :key="i">
            <span>

                <img :src="image">

            </span>
        </article>

        <div class="load_btn_div">

            <button @click="handle_images"><h3>Load more images</h3></button>

            <button @click="back_button" v-if="stored_date !== null"><h3>Go back</h3></button>

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
            this.get_created_at();
      
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


                console.log(date_get, type_get)

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

.article_container{

    display: grid;
    align-items: center;
    justify-items: center;
    grid-auto-flow: row;
    margin-top: 50px;

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

            padding: 10px;
            background-color: rgba($color: #FCFAF9, $alpha: 0.50);
            width: 90%;
            border-radius: 5px;
        }
    }
}
</style>