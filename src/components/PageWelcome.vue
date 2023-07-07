<template>
    <div>
        <article class="nav_welcome">
            <span class="wrapper_span">
                <div class="heading_text">
                    <h1 class="h1_text">Online Portfolio</h1>
                </div>
                <nav class="heading_navigation">
                    <div class="browse_link">
                        <router-link to="/PhotoGallery" class="router"><h3 class="h3_text">Browse</h3></router-link>
                    </div>
                    <div class="search">
                        <div class="icon" @click="icon_click"></div>
                        <div class="input">
                            <input type="text" placeholder="search images" class="search_input" ref="search_input_value" maxlength="12">
                        </div>
                        <span class="clear" @click="clear_bar"></span>
                    </div>
                </nav>
            </span>
        </article>
    </div>
</template>

<script>
    export default {

        methods:{

            clear_bar(){

                document.querySelector('.search_input').value = this.$refs['search_input_value'] = '';

            },

            icon_click(){

                let search = document.querySelector('.search');

                let input = document.querySelector('.input');

                let clear = document.querySelector('.clear');


                search.classList.toggle('active');

                input.classList.toggle('input_active');

                clear.classList.toggle('clear_active');
            }

        }
        
    }
</script>

<style lang="scss" scoped>
.nav_welcome{

    display: grid;
    justify-items: center;
    align-items: center;


    >.wrapper_span.hide_bar{
        opacity: 0;
    }
    >.wrapper_span{

        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-rows: 4vh 12vh;
        transition: 0.3s ease-in-out;
        opacity: 1;
      

        >.heading_text{

            
            display: grid;
            justify-items: center;
            align-items: center;
            color: #FFFFFF;
            font-size: 2em;
            animation: fadeIn 5s;
            -webkit-animation: fadeIn 5s;
            -moz-animation: fadeIn 5s;
            -o-animation: fadeIn 5s;
            -ms-animation: fadeIn 5s;
            >.h1_text{

            }
        }

        >.heading_navigation{

            display: grid;
            justify-items: center;
            align-items: center;
            grid-template-rows: 8vh 4vh;
            >.browse_link{

                display: grid;
                justify-items: center;
                align-items: center;
           
                animation: fadeIn 5s;
                -webkit-animation: fadeIn 5s;
                -moz-animation: fadeIn 5s;
                -o-animation: fadeIn 5s;
                -ms-animation: fadeIn 5s;

                >.router{

                    display: grid;
                    text-decoration: none;
                >.h3_text{


                    display: grid;
                    border-bottom: 2px solid #5F4BB6;
                    color: #FFFFFF;
                    font-size: 1.25em;



                }


                }


            }


            >.search.active{
                width: 200px;
              
            }
            >.search{

                animation: fadeIn 5s;
                -webkit-animation: fadeIn 5s;
                -moz-animation: fadeIn 5s;
                -o-animation: fadeIn 5s;
                -ms-animation: fadeIn 5s;
                position: relative;
                background-color: #FFFFFF;
                height: 40px;
                width: 40px;
                border-radius: 40px;
                transition: 0.5s ease-in-out;
                opacity: 1;
                overflow: hidden;

                >.clear::before{

                    position: absolute;
                    content:'';
                    width: 1px;
                    height: 10px;
                    background-color: black;
                    transform: rotate(45deg);
                }
                >.clear::after{

                    position: absolute;
                    content:'';
                    width: 1px;
                    height: 10px;
                    background-color: black;
                    transform: rotate(315deg);
                }

                >.clear.clear_active{
                    opacity: 1;
                }

                >.clear{
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 10px;
                    height: 10px;
                    right: 15px;
                    background-color: #FFFFFF;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: 0.3s ease-in-out;

                }

                >.input.input_active{

                    opacity: 1;

                }
                >.input{

                    opacity: 0;
                    position: relative;
                    width: 150px;
                    height: 40px;
                    left: 50px;
                    display: flex;
                    justify-items: center;
                    align-items: center;
                    transition: 0.2s ease-in-out;

                    >.search_input{

           
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        border: none;
                        outline: none;
                        font-size: 14px;
                        
                    }
                }

                >.icon{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 40px;
                    height: 40px;
                    background-color:#FFFFFF;
                    display: flex;
                    border-radius: 40px;
                    justify-content: center;
                    align-items: center;
                    z-index:1000;
                    cursor: pointer;

                }

                >.icon::before{
                    content:'';
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    border: 3px solid #5F4BB6;
                    border-radius: 50%;
                    transform: translate(-2px,-2px);
                }

                >.icon::after{

                    content: '';
                    position: absolute;
                    width: 3px;
                    height: 8px;
                    background-color: #5F4BB6;
                    transform: translate(6px,6px) rotate(315deg);
                }
            }
        }

    }
}



@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1}
}

</style>