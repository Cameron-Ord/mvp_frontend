<template>
    <div class="div_parent">
        <header class="page_header">
            <nav class="header_span">
                <div>
                  <button @click="make_active" class="hamburger"><div class="bar"></div></button>
                </div>
            </nav>
            <nav class="mobile_nav">
                <div>
                    <p class="nav_menu">PLACEHOLDER</p>
                </div>
            </nav>
        </header>

    </div>
</template>

<script>
    export default {


        
        methods:{

            make_active() {

            let menu_btn = document.querySelector(`.hamburger`);

            let mobile_menu = document.querySelector(`.mobile_nav`);

            menu_btn.classList.toggle(`is-active`);

            mobile_menu.classList.toggle(`is-active`);

            let get_div = document.querySelector(`body`);

            get_div.classList.toggle(`no-scroll`);
        
        }
        }

    }
</script>

<style lang="scss" scoped>
.div_parent{

    display: grid;
    justify-items: center;
    align-items: center;
}
.page_header{

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: center;
    align-items: center;
    min-height: 10vh;
    width: 100%;


    >.header_span{
        justify-items: center;
        align-items: center;
        display:grid;
        width: 100%;

        >.div_{

            display: grid;
            align-items: center;
            justify-items: center;
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


.hamburger .bar, .hamburger:after, .hamburger:before{
content: '';
display: block;
width: 100%;
height: 5px;
background-color: white;

margin-top: 6px;
margin-bottom: 6px;
transition: 0.4s;

}


.hamburger.is-active:before {

transform: rotate(-45deg) translate(-8px, 6px);
}

.hamburger.is-active:after {

transform: rotate(45deg) translate(-9px, -8px);
}

.hamburger.is-active .bar {

opacity: 0;
color: black;
}

.mobile_nav {

position: fixed;
top: 10vh;
right: 100%;
width: 100%;
min-height: 100vh;
display: block;
z-index: 98;
padding-top: 60px;
transition: 0.4s;
background-color: #FFFFFF;

}
.nav_menu{
    
    display: block;

    text-align: center;

    margin: 0 auto 16px;

    width: 100%;

    max-width: 200px;

    padding: 12px 16px;

    text-decoration: none;
  }
.mobile_nav.is-active {

right: 0;
}

</style>