<template>
        <article class="nav_welcome">
            <span class="wrapper_span">
                <div class="heading_text">
                    <h1 class="h1_text">Online Portfolio</h1>
                </div>
                <nav class="heading_navigation">
                    <div class="browse_link">
                        <router-link to="/PhotoStream" class="router"><h3 class="h3_text" @click="delete_classes">Browse</h3></router-link>
                    </div>
                    <div class="search">
                        <div class="icon" @click="icon_click"></div>
                        <div class="input">
                            <input type="text" placeholder="search images" class="search_input" ref="search_input_value" maxlength="25">
                        </div>
                        <span class="clear" @click="clear_bar"></span>
                    </div>
                </nav>
            </span>
        </article>
</template>

<script>
    export default {

        methods:{


            delete_classes(){

                let search = document.querySelector('.search');

                let input = document.querySelector('.input');

                let clear = document.querySelector('.clear');

                search.classList.remove('active');

                input.classList.remove('input_active');

                clear.classList.remove('clear_active');
                
            },


            
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

 
    grid-template-rows: 200px 350px;


    >.wrapper_span.hide_bar{
        opacity: 0;
    }
    >.wrapper_span{

        display: grid;
        justify-items: center;
        align-items: center;
        transition: 0.3s ease-in-out;
        opacity: 1;
        grid-template-rows: 1fr 1fr;
      

        >.heading_text{

            
            display: grid;
            justify-items: center;
            align-items: center;

            padding: 10px;
            border-radius: 10px;
            background-color: rgba($color: #6B9080, $alpha: 0.70);
            animation: fadeIn 3.5s;
            -webkit-animation: fadeIn 3.5s;
            -moz-animation: fadeIn 3.5s;
            -o-animation: fadeIn 3.5s;
            -ms-animation: fadeIn 3.5s;
            >.h1_text{

                font-size: 1.5em;
                color: rgba($color: #F6FFF8, $alpha: 1);
                border-bottom: #F6FFF8 solid 1px;
            }
        }

        >.heading_navigation{

            display: grid;
            justify-items: center;
            align-items: center;
            grid-template-rows: 35px 45px;
            >.browse_link{

                display: grid;
                justify-items: center;
                align-items: center;
                animation: fadeIn 3.5s;
                -webkit-animation: fadeIn 3.5s;
                -moz-animation: fadeIn 3.5s;
                -o-animation: fadeIn 3.5s;
                -ms-animation: fadeIn 3.5s;

                >.router{

                    display: grid;
                    text-decoration: none;
                >.h3_text{


                    display: grid;
                    border-bottom: 2px solid #6B9080;
                    color: #F6FFF8;
                    font-size: 1.25em;
                    margin-bottom: 10px;



                }


                }


            }


            >.search.active{
                width: 200px;
              
            }
            >.search{
                animation: fadeIn 3.5s;
                -webkit-animation: fadeIn 3.5s;
                -moz-animation: fadeIn 3.5s;
                -o-animation: fadeIn 3.5s;
                -ms-animation: fadeIn 3.5s;
                position: relative;
                background-color: rgba($color: #6B9080, $alpha: 0.75);
                height: 40px;
                width: 40px;
                border-radius: 40px;
                transition: 0.5s ease-in-out;
                opacity: 1;
                overflow: hidden;
                border: none;

                >.clear::before{

                    position: absolute;
                    content:'';
                    width: 1px;
                    height: 10px;
                    background-color: #F6FFF8;
                    transform: rotate(45deg);
                }
                >.clear::after{

                    position: absolute;
                    content:'';
                    width: 1px;
                    height: 10px;
                    background-color: #DFD9E2;
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
                    left: 45px;
                    display: flex;
                    justify-items: center;
                    align-items: center;
               
                    transition: 0.2s ease-in-out;
                   

                    >.search_input{

           
                        position: absolute;
                        top: 0;
                        width: 85%;
                        height: 100%;
                        border: none;
                        outline: none;
                        font-size: 14px;
                        color: #F6FFF8;
                        background-color: rgba($color: #F6FFF8, $alpha: 0);
                        
             
                    }
                }

                >.icon{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 40px;
                    height: 40px;
                    
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
                    border: 3px solid #DFD9E2;
                    border-radius: 50%;
                    transform: translate(-2px,-2px);
                }

                >.icon::after{

                    content: '';
                    position: absolute;
                    width: 3px;
                    height: 8px;
                    background-color: #F6FFF8;
                    transform: translate(6px,6px) rotate(315deg);
                }
            }
        }

    }
}

@media only screen and (min-width: 770px){
.nav_welcome{
    grid-template-rows: 200px 350px;


>.wrapper_span{


  

    >.heading_text{

        
        padding: 10px;
        border-radius: 10px;
        background-color: rgba($color: #6B9080, $alpha: 0.50);

        >.h1_text{

            font-size: 1.75em;

        }
    }

}
}
}


@media only screen and (min-width: 1024px){
.nav_welcome{
    grid-template-rows: 200px 325px;
   margin-bottom: 100px;
}

.heading_navigation{

display: grid;
justify-items: center;
align-items: center;
grid-template-columns: 1fr 1fr;

}
.nav_welcome{


>.wrapper_span{

    grid-template-rows: 100px 75px;
  

    >.heading_text{

        
        padding: 10px;
        border-radius: 10px;
        background-color: rgba($color: #6B9080, $alpha: 0.50);

        >.h1_text{

            font-size: 2em;

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