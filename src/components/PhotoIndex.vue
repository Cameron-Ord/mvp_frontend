<template>
    <div>
        <article class="wrapper" v-if="j !== undefined">

            <div class="container">
                <div class="left_arrow"></div>
                <img :src="img_src[j]" alt="" class="image_box">
                <div class="right_arrow"></div>
            </div>

            

        </article>

    </div>
</template>

<script>
import axios from 'axios';
    export default {

        data() {
            return {
                img_src: [],
                status: undefined,
                j: undefined
            }
        },

        mounted(){

            this.get_image();

        },

        

        methods:{


            next(){

                this.j++;

                if (this.j > this.img_src.length - 1) {

                    this.j = 0;

                    }

            },

            prev(){

                this.j--;

                if (this.j < 0) {

                    this.j = this.img_src.length - 1;
            }
            },

            get_image(){

                axios({
                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/images`,
        

                }).then((res) =>{

                    for(let i = 0; i<res['data'].length; i++){

                        this.img_src.push(res['data'][i]['file_path']);                   
                    }
                
                  
                  
                  

                    this.j = 0;

                }).catch(async (err) => {

                    err;
                    this.status = 'oops'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

.wrapper{

    display: grid;
    align-items: center;
    justify-items: center;

    >.container{

        display: grid;
        align-items: center;
        justify-items: center;

        >.image_box{
            display: grid;
            width: 50%
        }

    }
}


</style>