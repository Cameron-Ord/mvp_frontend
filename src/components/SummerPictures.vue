<template>
    <article v-if="p !== undefined" class="summer_article">
        <span class="summer_span">

            <h2>Summer Photos</h2>

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

                        created_at: this.stored_interval,

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

.summer_article.hide_display{

    opacity: 0;
}
.summer_article{

    display: grid;
    align-items: center;
    justify-items: center;
    transition: 0.3s ease-in-out;

    >.summer_span{
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-rows: 15vh 1fr 8vh;

        animation: fadeIn 4s;
        -webkit-animation: fadeIn 4s;
        -moz-animation: fadeIn 4s;
        -o-animation: fadeIn 4s;
        -ms-animation: fadeIn 4s;

        >h2{
            color: #333333;
            background-color: rgba($color: #FCFAF9, $alpha: 0.5);
            padding: 5px;
            border-radius: 10px;
        }

        >.summer_router{

            text-decoration: none;

            >.p_tag_summer{
                color: #333333;
                background-color: rgba($color: #FCFAF9, $alpha: 0.5);
                padding: 5px;
                border-radius: 10px;
            }
        }

        >img{
            background-color: rgba($color: #FCFAF9, $alpha: 0.5);
            border-radius: 10px;
            width: 70%;
            padding: 10px;
        }
    }
}

</style>