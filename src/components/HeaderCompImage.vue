<template>
  
    <header class="page_header_image">
        <div class="wrapper">
            <nav class="header_span">
                <div class="btn_div">
                <button @click="make_active" class="hamburger_image"><div>

                    <div class="bar_1"></div>
                    <div class="bar_2"></div>
                    <div class="bar_3"></div>

                </div></button>
                </div>
            </nav>
            <nav class="icon_nav">
                <router-link to="/" class="nav_router"><h1 class="nav_icon_button">[C]</h1></router-link>
            </nav>
            <nav class="mobile_nav">
                <div>
                    <router-link to="/PhotoStream" class="router"><h3 class="nav_menu_image" @click="handle_click">Browse</h3></router-link>
                    <router-link to="/AboutPage" class="router"><h3 class="nav_menu_image" @click="handle_click">About</h3></router-link>
                    <router-link to="/ContactPage" class="router"><h3 class="nav_menu_image" @click="handle_click">Contact</h3></router-link>
                </div>
                <div>
                    <a class="nav_menu_image" href="https://github.com/NuckenMcFuggets" target="_blank"><h3>Github</h3></a>
                    <a class="nav_menu_image" href="https://www.linkedin.com/in/camord34/" target="_blank"><h3>LinkedIn</h3></a>
                    <a class="nav_menu_image" href="mailto:cameron.ian.ronald.ord@outlook.com" target="_blank"><h3>Email</h3></a>
                </div>
            </nav>
        </div>
    </header>


</template>

<script>
import Cookies from 'vue-cookies';
export default {

    mounted(){

    },

    
    methods:{

        handle_click(){

            this.delete_classes();
            this.delete_cookies();

        },

        delete_cookies(){
                Cookies.remove('stored_int');
                Cookies.remove('photo_type');
        },



        delete_classes(){
        let menu_btn = document.querySelector(`.hamburger_image`);

        let mobile_menu = document.querySelector(`.mobile_nav`);

        let get_div = document.querySelector(`body`);

        let hide_footer = document.querySelector('.page_footer_image');

        let hide_display_image_supplier = document.querySelector('.divtacular');

        menu_btn.classList.remove(`is-active`);
        
        mobile_menu.classList.remove(`is-active`);

        get_div.classList.remove(`no-scroll`);

        hide_footer.classList.remove('hide_footer');

        hide_display_image_supplier.classList.remove('hide_display_image');
        },

        make_active() {

        let menu_btn = document.querySelector(`.hamburger_image`);

        let mobile_menu = document.querySelector(`.mobile_nav`);

        let get_div = document.querySelector(`body`);

        let hide_footer = document.querySelector('.page_footer_image');

        let hide_display_image_supplier = document.querySelector('.divtacular');

        hide_display_image_supplier.classList.toggle('hide_display_image');

        hide_footer.classList.toggle('hide_footer');

        menu_btn.classList.toggle(`is-active`);

        mobile_menu.classList.toggle(`is-active`);

        get_div.classList.toggle(`no-scroll`);
    }
    }

}
</script>

<style lang="scss" scoped>

@keyframes fadeIn {
0% {opacity: 0;}
100% {opacity: 1}
}

.page_header_image{

display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
justify-items: center;
align-items: center;
min-height: 10vh;
width: 100%;
background-color: rgba($color: #252323, $alpha: 1.0);
>.wrapper{

    width: 100%;
    justify-items: center;
    display: grid;
    align-items: center;
    grid-template-columns: 25vw 125vw;


        >.header_span{
            animation: fadeIn 2s;
        -webkit-animation: fadeIn 2s;
        -moz-animation: fadeIn 2s;
        -o-animation: fadeIn 2s;
        -ms-animation: fadeIn 2s;
        justify-items: center;
        align-items: center;
        display:grid;
        width: 100%;
        

        >.btn_div{

            width: 50px;
            height: 50px;
            border-radius: 10px;
            display: grid;
            align-items: center;
            justify-items: center;
     
        }
  
}

        >.icon_nav{
            animation: fadeIn 2s;
            -webkit-animation: fadeIn 2s;
            -moz-animation: fadeIn 2s;
            -o-animation: fadeIn 2s;
            -ms-animation: fadeIn 2s;
            >.nav_router{

                text-decoration: none;
                >.nav_icon_button{

               
                    color: #f5f1ed;
                    font-size: 2em;
                    padding: 5px;
                    border-radius: 10px;
                }
            }
        }
}


}

.hamburger_image{
position: relative;
display: block;
width: 35px;
height: 35px;
cursor: pointer;
appearance: none;
background: none;
outline: none;
border: none;
}


.hamburger_image>div>.bar_1{
content: '';
display: block;
width: 100%;
height: 5px;
margin-top: 5px;
margin-bottom: 6px;
transition: 0.4s;
background-color: #f5f1ed;

}
.hamburger_image>div>.bar_2{
content: '';
display: block;
width: 100%;
height: 5px;
margin-top: 5px;
margin-bottom: 6px;
transition: 0.4s;
background-color: #f5f1ed;
}

.hamburger_image>div>.bar_3{
content: '';
display: block;
width: 100%;
height: 5px;
margin-top: 5px;
margin-bottom: 6px;
transition: 0.4s;
background-color: #f5f1ed;
}

.hamburger_image.is-active>div>.bar_1 {

transform: rotate(-45deg) translate(-8px, 6px);
}


.hamburger_image.is-active>div>.bar_2 {
opacity: 0;
}

.hamburger_image.is-active>div>.bar_3 {

transform: rotate(45deg) translate(-9px, -8px);
}

.hamburger_image.is-active .bar_image {

opacity: 0;

}

.mobile_nav {
background-color: #252323;
position: fixed;
top: 10vh;
right: 100%;
width: 100%;
min-height: 100vh;
display: grid;
z-index: 98;
padding-top: 60px;
transition: 0.4s ease-in-out;
grid-template-rows: 1fr 1fr;

>div{

>.router{
    text-decoration: none;


}
}

}
.nav_menu_image{

background-color: #f5f1ed;

display: block;

text-align: center;

margin: 0 auto 16px;

width: 35%;

max-width: 200px;

padding: 12px 16px;

border-radius: 10px;

text-decoration: none;

color: #252323;

}
.mobile_nav.is-active {

right: 0;
}
@media only screen and (min-width: 770px){


}


@media only screen and (min-width: 1024px){


}
</style>