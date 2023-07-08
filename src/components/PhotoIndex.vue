<template>
    <div>
        <article class="wrapper_article" v-if="j !== undefined">
            <div class="container">
                <div class="arrow_left" @click="prev"><div class="arrow_border"></div></div>
                <img :src="img_src[j]" alt="" class="image_box">
                <div class="arrow_right" @click="next"><div class="arrow_border"></div></div>
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
.wrapper_article.hide_image{

opacity: 0;
}
.wrapper_article{

    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 40vh;
    transition: 0.3s ease-in-out;


    >.container{

        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 25vw 1fr 25vw;

        >.image_box{
            display: grid;
            width: 100%;
            
            border-radius: 10px;

            border-style: solid;
            color: #FFFFFF;
            border-width: 5px;
            

        }

        >.arrow_left{

            height: 30px;
            width: 30px;
            transform: rotate(-90deg);
            cursor: pointer;
            align-items: center;
            display: grid;
            justify-items: center;


            >.arrow_border{

             
                height: 20px;
                width: 20px;
                border-top: 6px solid #FFFFFF;
                border-left: 6px solid #FFFFFF;
                transform: rotate(45deg);

         
             
            }
        }
            >.arrow_right{

            height: 30px;
            width: 30px;
            transform: rotate(90deg);
            cursor: pointer;
            align-items: center;
            display: grid;
            justify-items: center;
            >.arrow_border{

                
                height: 20px;
                width: 20px;
                border-top: 6px solid #FFFFFF;
                border-left: 6px solid #FFFFFF;
                transform: rotate(45deg);
     
         
             
            }
        }



    }
}


</style>