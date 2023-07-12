<template>
    <article v-if="p !== undefined" class="summer_article">
        <span class="summer_span">

            <img :src="stored_images[p]" alt="">

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

            this.get_images()

        },

        methods:{

            handle_click(){

                this.grab_type();
                this.delete_classes();

            },


            grab_type(){

                Cookies.set('photo_type', this.image_type_storage);

            },

            delete_classes(){
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

                axios({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/images`,

                    params:{

                        type: 'summer',
                    }
                }).then((response => {
 
                    for(let i=0; i<response['data'].length; i++){
                    this.stored_images.push(response['data'][i]['file_path'])
                    
                    }

                    this.image_type_storage = response['data'][0]['type'];

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
transform: translateY(7vh);

>.summer_span{
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 1fr;

    animation: fadeIn 4s;
    -webkit-animation: fadeIn 4s;
    -moz-animation: fadeIn 4s;
    -o-animation: fadeIn 4s;
    -ms-animation: fadeIn 4s;

    >h2{
        color: #F7F7F2;

        font-size: 1em;
        background-color: rgba($color: #7392B7, $alpha: 0.85);
        padding: 5px;
        border-radius: 5px;
    }

    >.summer_router{

        text-decoration: none;

        >.p_tag_summer{
            color: #F7F7F2;
            font-size: 1em;
            padding: 5px;
            border-radius: 5px;
            background-color: rgba($color: #7392B7, $alpha: 0.85);
            transform: translateY(-35vw);
        }
    }

    >img{


            border-radius: 50%;
            height: 225px;
            width: 225px;
            max-height: 225px;
            max-width: 225px;
         
            object-fit: cover;
            margin-bottom: 10px;
            margin-top: 10px;
    }
}
}
@media only screen and (min-width: 770px){
.summer_article{

    transform: translateY(8vh);
>.summer_span{

    >h2{

        font-size: 1.25em;
    }

    >.summer_router{

        >.p_tag_summer{

            transform: translateY(-22.5vh);
            font-size: 1.25em;
        }
    }

    >img{

        border-radius: 50%;
        height: 425px;
        width: 425px;
        max-height: 425px;
        max-width: 425px;
        
        object-fit: cover;
        margin-bottom: 10px;
        margin-top: 10px;
    }
}
}
}

@media only screen and (min-width: 1024px){
.summer_article{
    transform: translateX(3vw);
>.summer_span{

    >h2{

        font-size: 1.25em;
    }

    >.summer_router{

        >.p_tag_summer{
            transform: translateY(-25vh);
            font-size: 1.25em;
        }
    }

    >img{

        border-radius: 50%;
        min-height: 500px;
        min-width: 500px;
        object-fit: cover;
        max-height: 750px;
        max-width: 750px;
    }
}
}
}
</style>