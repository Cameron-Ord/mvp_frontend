<template>
    <div class="top">
        <article class="wrapper_article">
            <div class="container" v-if="j !== undefined">
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


.top{
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100%;
}
.wrapper_article.hide_image{

opacity: 0;
}
.wrapper_article{

    display: grid;
    align-items: center;
    justify-items: center;
    transition: 0.3s ease-in-out;
   


    >.container{

        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 18vw 1fr 18vw;

        >.image_box{
            display: grid;
            align-self: center;
            justify-self: center;
            width: 0%;
            height: 100%;
            max-width: 300px;
            
            border-radius: 50%;
            object-fit: cover;

            border-style: solid;
            color: rgba($color: #488286, $alpha: 0.25);
            border-width: 15px;
            

        }

        >.arrow_left{

            height: 30px;
            width: 30px;
            transform: rotate(-90deg);
            cursor: pointer;
            align-items: center;
            display: grid;
            justify-items: center;

            padding: 10px;
            border-radius: 50%;
            background-color: rgba($color: #488286, $alpha: 0.25);

            >.arrow_border{

             
                height: 20px;
                width: 20px;
                border-top: 6px solid #DFD9E2;
                border-left: 6px solid #DFD9E2;
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

            padding: 10px;
            border-radius: 50%;
            background-color: rgba($color: #488286, $alpha: 0.25);
            >.arrow_border{

                
                height: 20px;
                width: 20px;
                border-top: 6px solid #DFD9E2;
                border-left: 6px solid #DFD9E2;
                transform: rotate(45deg);
     
         
             
            }
        }



    }
}
@media only screen and (min-width: 770px){



.wrapper_article{





>.container{


    grid-template-columns: 5vw 1fr 5vw;

    >.image_box{
  
        width: 90%;    

        

        }


    }

}
}
@media only screen and (min-width: 1024px){
.wrapper_article{



>.container{


    grid-template-columns: 5vw 1fr 5vw;

    >.image_box{
  
        width: 100%;    
    
        max-width: 500px;
        

        }


    }

}

}
</style>