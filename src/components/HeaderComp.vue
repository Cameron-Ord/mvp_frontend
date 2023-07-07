<template>
    <div>
        <header class="page_header">
            <nav class="header_span">
                <div class="menu_div">
                    <button @click="make_active" class="hamburger">
                        <div class="bar"></div>
                    </button>
                </div>
                <div class="logo_div">

                    <p>PLACEHOLDER</p>

                </div>
                <div class="search_bar">

                    <p>PLACEHOLDER</p>

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

.page_header{

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    place-items: center;
    align-items: center;
    min-height: 10vh;

    >.header_span{

        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 1fr 1fr 1fr;

        >.menu_div{
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
background-color:black;
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
padding-top: 120px;
transition: 0.4s;

>.nav_menu{

      
    display: block;

    text-align: center;

    margin: 0 auto 16px;

    width: 100%;

    max-width: 200px;

    padding: 12px 16px;

    text-decoration: none;
}



}
.mobile_nav.is-active {

right: 0;
}

</style>