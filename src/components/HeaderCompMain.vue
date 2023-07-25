<template>
    <div class="headersContainer">
  
    <header class="page_header">
        <div class="wrapper">
            <nav class="header_span">
                <div class="btn_div">

                    <!--hamburger menu bars-->

                <button @click="make_active" class="hamburger"><div>

                    <div class="bar_1"></div>
                    <div class="bar_2"></div>
                    <div class="bar_3"></div>

                </div></button>
                </div>
            </nav>
            <nav class="icon_nav">

                <!--navigation-->

                <router-link to="/" class="nav_router"><h1 class="nav_icon_button">[C]</h1></router-link>
            </nav>
            <nav class="mobile_nav">
                <div>

                    <!--nav buttons, calls handle click function on click-->
                    
                    <router-link to="/PhotoStream" class="router"><h3 class="nav_menu" @click="handle_click">Browse</h3></router-link>
                    <router-link to="/AboutPage" class="router"><h3 class="nav_menu" @click="handle_click">About</h3></router-link>
                    <router-link to="/ContactPage" class="router"><h3 class="nav_menu" @click="handle_click">Contact</h3></router-link>
                </div>
            </nav>
        </div>
    </header>
    <header class="page_header_ws">
            <div class="desktop_wrapper">
            <nav>
                <div class="icon_div">

                    <!--navigation-->

                <h1 class="icon" @click="gotoMain">[C]</h1>
                </div>
                <div class="htag_div">

                    <!--nav buttons, calls handle click (pc) function on click-->

                    <router-link to="/PhotoStream" class="router"><h2 class="nav_tag" @click="handle_click_pc">Browse</h2></router-link>
                    <router-link to="/AboutPage" class="router"><h2 class="nav_tag" @click="handle_click_pc">About</h2></router-link>
                    <router-link to="/ContactPage" class="router"><h2 class="nav_tag" @click="handle_click_pc">Contact</h2></router-link>
                </div>
            </nav>
        </div>
        </header>
    </div>
 


</template>

<script>
import Cookies from 'vue-cookies';
export default {

    mounted(){

    },

    
    methods:{

        gotoMain(){

            //if the user is not at '/', pushes to '/'. Otherwise, refreshes

            if(this.$route.path !== '/'){

                this.$router.push('/');

            }else{

                this.$router.go();
            }
            
        },

        //functions that call other functions

        handle_click_pc(){


            this.delete_cookies();
        },

        handle_click(){

            this.delete_classes();
            this.delete_cookies();

        },

        delete_cookies(){
                Cookies.remove('photo_type');
        },



        delete_classes(){

            //deletes classes

        let menu_btn = document.querySelector(`.hamburger`);

        let mobile_menu = document.querySelector(`.mobile_nav`);

        let get_div = document.querySelector(`body`);

        let hide_footer = document.querySelector('.page_footer');

        let hide_display = document.querySelector('.photo_stream_section');

        let hide_display_image_supplier = document.querySelector('.divtacular');

        let hide_bar = document.querySelector('.wrapper_span');

        menu_btn.classList.remove(`is-active`);
        
        mobile_menu.classList.remove(`is-active`);

        get_div.classList.remove(`no-scroll`);

        let about_span = document.querySelector('.about_article');

        let contact_span = document.querySelector('.contact_article');

        let contact_header = document.querySelector('.contact_header');

        if(contact_header !== null){
        contact_header.classList.remove('hide_contact_header');
        }


        if(contact_span !== null){
        contact_span.classList.remove('hide_contact_info');
        }


        if(about_span !== null){
        about_span.classList.remove('hide_about');
        }
        hide_footer.classList.remove('hide_footer');
        if(hide_bar !== null){
        hide_bar.classList.remove('hide_bar');
        }
        if(hide_display !== null){
        hide_display.classList.remove('hide_display');
        }
        if(hide_display_image_supplier !== null){
        hide_display_image_supplier.classList.remove('hide_display_image');
        }

        },

        make_active() {

            //function for toggling classes on click

        let menu_btn = document.querySelector(`.hamburger`);

        let mobile_menu = document.querySelector(`.mobile_nav`);

        let get_div = document.querySelector(`body`);

        let hide_footer = document.querySelector('.page_footer');

        let hide_display_image_supplier = document.querySelector('.divtacular');

        let hide_display = document.querySelector('.photo_stream_section');

        let hide_bar = document.querySelector('.wrapper_span');

        let about_span = document.querySelector('.about_article');

        let contact_span = document.querySelector('.contact_article');

        let contact_header = document.querySelector('.contact_header');

        if(about_span !== null){
        about_span.classList.toggle('hide_about');
        }

        if(contact_header !== null){
        contact_header.classList.toggle('hide_contact_header');
        }

        if(contact_span !== null){
        contact_span.classList.toggle('hide_contact_info');
        }

        hide_footer.classList.toggle('hide_footer');

        menu_btn.classList.toggle(`is-active`);

        mobile_menu.classList.toggle(`is-active`);

        get_div.classList.toggle(`no-scroll`);

        if(hide_bar !== null){
        hide_bar.classList.toggle('hide_bar');
        }
        if(hide_display !== null){
        hide_display.classList.toggle('hide_display');
        }
        if(hide_display_image_supplier !== null){
        hide_display_image_supplier.classList.toggle('hide_display_image');
        }
    }
    }

}
</script>

<style lang="scss" scoped>
.headersContainer{
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
}
.page_header_ws{
display: none;
}

@keyframes fadeIn {
0% {opacity: 0;}
100% {opacity: 1}
}

.page_header{

display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
justify-items: center;
align-items: center;
min-height: 125px;
width: 100%;

animation: fadeIn 2s;
-webkit-animation: fadeIn 2s;
-moz-animation: fadeIn 2s;
-o-animation: fadeIn 2s;
-ms-animation: fadeIn 2s;

>.wrapper{
    width: 100%;
    justify-items: center;
    display: grid;
    align-items: center;
    grid-template-columns: 25vw 125vw;


        >.header_span{
            
        justify-items: center;
        align-items: center;
        display:grid;
        width: 100%;
        

        >.btn_div{

            background-color: rgba($color: #6B9080 , $alpha: 0.80);
            width: 50px;
            height: 50px;
            border-radius: 10px;
            display: grid;
            align-items: center;
            justify-items: center;
     
        }
  
}

        >.icon_nav{
            
            >.nav_router{

                text-decoration: none;
                >.nav_icon_button{

                    font-size: 2em;
                    color: #F6FFF8;
                    background-color: rgba($color: #6B9080 , $alpha: 0.80);
          
                    padding: 5px;
                    border-radius: 10px;
                }
            }
        }
}


}

.hamburger{
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


.hamburger>div>.bar_1{
content: '';
display: block;
width: 100%;
height: 5px;
margin-top: 5px;
margin-bottom: 6px;
transition: 0.4s;
background-color: #F6FFF8;

}
.hamburger>div>.bar_2{
content: '';
display: block;
width: 100%;
height: 5px;
margin-top: 5px;
margin-bottom: 6px;
transition: 0.4s;
background-color: #F6FFF8;
}

.hamburger>div>.bar_3{
content: '';
display: block;
width: 100%;
height: 5px;
margin-top: 5px;
margin-bottom: 6px;
transition: 0.4s;
background-color: #F6FFF8;
}

.hamburger.is-active>div>.bar_1 {

transform: rotate(-45deg) translate(-8px, 6px);
}


.hamburger.is-active>div>.bar_2 {
opacity: 0;
}

.hamburger.is-active>div>.bar_3 {

transform: rotate(45deg) translate(-9px, -8px);
}

.hamburger.is-active .bar_image {

opacity: 0;

}

.mobile_nav {

position: fixed;
top: 25vh;
right: 100%;
width: 100%;
min-height: 100vh;
display: block;
z-index: 98;
padding-top: 100px;
transition: 0.4s ease-in-out;


>div{

>.router{
    text-decoration: none;
  
    color: #F6FFF8;
}
}

}
.nav_menu{

background-color: rgba($color: #6B9080, $alpha: 0.80);

display: block;

text-align: center;

margin: 0 auto 16px;

width: 35%;

max-width: 200px;

padding: 12px 16px;

border-radius: 10px;

text-decoration: none;

color: #F6FFF8;

}
.mobile_nav.is-active {

right: 0;
}
@media only screen and (min-width: 770px){


@keyframes fadeIn {
0% {opacity: 0;}
100% {opacity: 1}
}
.page_header{
    display: none;
}
.page_header_ws{
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    background-color: rgba($color: #6B9080 , $alpha: 0.70);
    min-height: 75px;
    width: 100%;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
    >.desktop_wrapper{
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    >nav{
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 1fr 3fr;

        width: 100%;
       
        >.htag_div{
            width: 100%;
            display: grid;
            align-items: center;
            justify-items: center;
            grid-template-columns: 1fr 1fr 1fr;
          
            >.router{

                text-decoration: none;
                color: #F6FFF8;
                cursor: pointer;

                >.nav_tag{
                    
                    color: #F6FFF8;
                    border-bottom: #F6FFF8 solid 2px;


                }
            }

        }
       
        >.icon_div{
            font-size: 1.5em;
            cursor: pointer;
            width: 100%;
            color: #F6FFF8;
            display: grid;
            align-items: center;
            justify-items: center;
        }
    }
}
}



}

@media only screen and (min-width: 1024px){
.page_header{
    display: none;
}

.page_header_ws{
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(770px, 1fr));
    background-color: rgba($color: #6B9080 , $alpha: 0.70);
    min-height: 75px;
    width: 100%;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
.desktop_wrapper{
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;
    >nav{
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 1fr 3fr;

        width: 100%;
       
        >.htag_div{
            width: 100%;
            display: grid;
            align-items: center;
            justify-items: center;
            grid-template-columns: 1fr 1fr 1fr;
          
            >.router{

                text-decoration: none;
                color: #F6FFF8;
                cursor: pointer;

                >.nav_tag{

                    cursor: pointer;
                    color: #F6FFF8;
                    border-bottom: #F6FFF8 solid 2px;


                }
            }

        }
       
        >.icon_div{
            font-size: 1.5em;
            cursor: pointer;
            width: 100%;
            color: #F6FFF8;
            display: grid;
            align-items: center;
            justify-items: center;
        }
    }
}
}

@keyframes fadeIn {
0% {opacity: 0;}
100% {opacity: 1}
}

.page_header{

>.wrapper{
    display: none;
}


}

}
</style>