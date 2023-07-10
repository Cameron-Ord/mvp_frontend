<template>
    <div>
        <article class="image_container" v-for="(image, i) in stored_images" :key="i">
            <span>

                <img :src="image">

            </span>
        </article>

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
                stored_interval: null
            }
        },

        mounted(){

            this.stored_type = Cookies.get('photo_type');
            this.get_images()
      
        },


        methods:{

            get_images(){

                axios({

                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/images`,
                    params:{

                        created_at: this.stored_interval,

                        type: this.stored_type

                    }

                }).then((response =>{

        
                    for(let i = 0; i<response['data'].length; i++){

                        this.stored_images.push(response['data'][i]['file_path']);
                        
                    }

                    this.get_created_at();

                })).catch((err =>{

                    err;

                }))

            },

            get_created_at(){

                axios({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/images-date`,

                    params:{

                        created_at: this.stored_interval,

                        type: this.stored_type,

                    }
                }).then((response => {

                    this.stored_interval = response['data'][0]['created_at'];
                    console.log(this.stored_interval)
                    

                })).catch((error => {

                    error;
                }))

            },



        }
    }
</script>

<style lang="scss" scoped>
.image_container{

    display: grid;
    align-items: center;
    justify-items: center;

    >span{

        >img{

            width: 90%;
        }
    }
}
</style>