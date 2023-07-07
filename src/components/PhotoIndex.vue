<template>
    <div>
        <div class="wrapper">

          <img :src="img_src[0]" alt="">

        </div>

    </div>
</template>

<script>
import axios from 'axios';
    export default {

        data() {
            return {
                img_src: [],
                status: undefined
            }
        },

        mounted(){

            this.get_image();

        },

        

        methods:{
            get_image(){

                axios({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/images`,
                    responseType: 'blob',

                }).then((res) =>{


                  
                    this.img_src.push(URL.createObjectURL(res["data"]));
                  
                  
                    console.log(this.img_src)


                }).catch(async (err) => {

                    err;
                    this.status = 'oops'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>