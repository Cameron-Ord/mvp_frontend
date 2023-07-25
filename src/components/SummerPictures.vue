<template>
    <!--protecting the html from undefined variables-->

    <article v-if="p !== undefined" class="summer_article">
        <span class="summer_span" v-if="stored_images !== undefined">
            <!--displays a random image from the stored_images array-->

            <img :src="stored_images[p]" alt="">
            <!--navigation-->                                                      <!--calls the handle_click function on click-->

            <router-link to="/ImageLoader" class="summer_router" ><p class="p_tag_summer" @click="handle_click">View</p></router-link>

        </span>
    </article>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {

        data() {
            return {
                stored_images: [],
                stored_interval: null,
                p: undefined,
                image_type_storage: undefined
            }
        },

        mounted(){
            //calls the API function

            this.get_images()

        },

        methods:{

            handle_click(){
                //calls 2 functions on click

                this.grab_type();
                this.delete_classes();

            },


            grab_type(){
                //sets the photo_type cookie based of the image_type variable when the user clicks the view button

                Cookies.set('photo_type', this.image_type_storage);

            },

            delete_classes(){
                //deleting classes

            let menu_btn = document.querySelector(`.hamburger`);

            let mobile_menu = document.querySelector(`.mobile_nav`);

            let get_div = document.querySelector(`body`);

            let hide_footer = document.querySelector('.page_footer');

            let hide_display = document.querySelector('.summer_article');

            menu_btn.classList.remove(`is-active`);
            
            mobile_menu.classList.remove(`is-active`);

            get_div.classList.remove(`no-scroll`);

            hide_footer.classList.remove('hide_footer');

            hide_display.classList.remove('hide_display');
        },

            get_images(){
                //gets images where the type is summer


                axios({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/images`,

                    params:{

                        type: 'summer',
                    }
                }).then((response => {
 
                    //pushing all the file paths into the stored_images array


                    for(let i=0; i<response['data'].length; i++){
                    this.stored_images.push(response['data'][i]['file_path'])
                    
                    }

                    //defining the image_type_storage variable with it's type


                    this.image_type_storage = response['data'][0]['type'];

                    //defining p by giving it a random number from 0 to the length of the response


                    this.p = Math.floor(Math.random() * response['data'].length);



                })).catch((error => {

                    error;
                }))
            }

        },
    }
</script>


<style lang="scss" scoped>
@keyframes fadeIn {
0% {opacity: 0;}
100% {opacity: 1}
}

.summer_article{

display: grid;
align-items: center;
justify-items: center;
transition: 0.3s ease-in-out;
margin-top: 5px;
margin-bottom: 5px;
transform: translateY(0px);

>.summer_span{
    display: grid;
    align-items: center;
    justify-items: center;


    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;

    >h2{
        color: #F7F7F2;

        font-size: 1em;
        background-color: rgba($color: #6B9080, $alpha: 0.85);
        padding: 5px;
        border-radius: 5px;
    }

    >.summer_router{

        text-decoration: none;
        transform: translateY(-140px);
        >.p_tag_summer{
            color: #F7F7F2;
            font-size: 1em;
            padding: 25px;
            border-radius: 5px;
            background-color: rgba($color: #6B9080, $alpha: 0.85);
      
        }
    }

    >img{
            border-style: solid;
            color: #EAF4F4;
            border-width: 5px;

            border-radius: 50%;
            height: 225px;
            width: 225px;
            max-height: 225px;
            max-width: 225px;
         
            object-fit: cover;

    }
}
}
@media only screen and (min-width: 770px){
.summer_article{

    transform: translateY(0px);
>.summer_span{

    >h2{

        font-size: 1.25em;
    }

    >.summer_router{
        transform: translateY(-250px);
        >.p_tag_summer{

       
            font-size: 1.25em;
        }
    }

    >img{
        border-style: solid;
        color: #EAF4F4;
        border-width: 7.5px;
        border-radius: 50%;
        height: 425px;
        width: 425px;
        max-height: 425px;
        max-width: 425px;
        
        object-fit: cover;

    }
}
}
}

@media only screen and (min-width: 1024px){
.summer_article{
    transform: translateX(40px);
>.summer_span{

    >h2{

        font-size: 1.25em;
    }

    >.summer_router{
        transform: translateY(-300px);
        >.p_tag_summer{
        
            font-size: 1.25em;
        }
    }

    >img{
        object-fit: cover;
        border-radius: 50%;
        min-height: 500px;
        min-width: 500px;
        object-fit: cover;
        max-height: 750px;
        max-width: 750px;
        border-style: solid;
        color: #EAF4F4;
        border-width: 10px;
    }
}
}
}
</style>