<template>

    <div class="divParent">


        <article class="contact_header">
                <span>
                <h1>CONTACT ME</h1>
                </span>
        </article>


        <article class="contact_article">

            <span class="inputSpan">
                <div class="inputDiv">


                    <div class="innerDiv">
                    <p>Your Name</p>
                    <input class="inputTag" type="text" ref="userName">
                    </div>

                    <div class="innerDiv">
                    <p>Your Email</p>
                    <input class="inputTag" type="text" ref="userEmail">
                    </div>

                    <div class="innerDivBox">
                    <p>Your message</p>
                    <textarea class="inputTagBox" cols="30" rows="10" maxlength="300" ref="messageContent"></textarea>
                    <p class="submitTag" @click="submitText">Submit</p>

                    <p v-if="status !== undefined">{{ status }}</p>
                    </div>

                    <div class="orDiv">
                        <h3>OR</h3>
                    </div>
                
                    <div class="emailDiv">
                    <h3>Direct Email me</h3>
                    <img src="~@/assets/jean-victor-balin-icon-letter-mail.svg">
                    </div>

                </div>  
            </span>
        </article>

    </div>

</template>

<script>
import axios from 'axios';

    export default {
        
        data() {
            return {
               status: undefined,
               name_value: undefined,
               email_value: undefined,
               content_value: undefined
            }
        },

        mounted(){


        },

        methods:{

            submitText(){

                this.name_value = this.$refs['userName'].value
                this.email_value = this.$refs['userEmail'].value
                this.content_value = this.$refs['messageContent'].value



                if(this.name_value === ''){
                    this.name_value = null;
                }

                if(this.email_value === ''){
                    this.email_value = null;
                }


                if(this.content_value === ''){
                    this.content_value = null;
                }

                axios({

                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/contact`,

                    method: 'POST',

                    data:{

                        name: this.name_value,
                        email: this.email_value,
                        content: this.content_value
                    }
                }).then((res)=>{

                    res;

                    this.status = 'message sent!';

                }).catch((err)=>{

                    if(err['response']['data'] === 'the name must be sent!'){

                        this.status = 'please provide your name!';

                    }else if(err['response']['data'] === 'the email must be sent!'){

                        this.status = 'please provide your email!';

                    }else if(err['response']['data'] === 'the content must be sent!'){

                        this.status = 'please write a message!';

                    }else{

                        this.status = 'something has gone wrong..';
                    }
                })
            }
        }
    }
</script>


<style lang="scss" scoped>

@keyframes fadeIn {
0% {opacity: 0;}
100% {opacity: 1}
}

.divParent{

    display: grid;
    align-items: center;
    justify-items: center;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
    width: 100%;

}
.contact_article.hide_contact_info{

    opacity: 0;
}
.contact_header.hide_contact_header{
    opacity: 0;
}
.contact_header{
    margin-top: 25px;
            
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 1fr 1fr;
    transition: 0.3s ease-in-out;
    
    >span{
    
        display: grid;
        align-items: center;
        justify-items: center;
        background-color: rgba($color: #6B9080, $alpha: 0.80);
        padding: 10px;
        border-radius: 10px;
            >h1{
                font-weight: bold;
                font-size: 2em;
                margin-bottom: 15px;
                margin-top: 15px;
                color: #F6FFF8;
                border-bottom: #F6FFF8 solid 1px;

            }
        }
}

.contact_article{
    margin-bottom: 25px;
    transition: 0.3s ease-in-out;
    display: grid;
    align-items: center;
    justify-items: center;

    width: 100%;


    >.inputSpan{
        min-width: 250px;
        display: grid;
        align-items: center;
        justify-items: center;
     
        width: 100%;
   


        >.inputDiv{

            display: grid;
            align-items: center;
            justify-items: center;
            grid-template-rows: 100px 100px 225px 80px 160px;
            text-align: center;
            background-color: rgba($color: #F6FFF8, $alpha: 0.70);
            width: 70%;
            
            padding: 10px;
            border-radius: 10px;
            >.orDiv{
            display: grid;
            align-items: center;
            justify-items: center;
            width: 70px;
            height: 70px;

            border-radius: 50%;
            background-color: rgba($color: #6B9080, $alpha: 0.80);
            >h3{
                border-bottom: #F6FFF8 solid 1px;
                font-weight: bold;
                color: #F6FFF8;
            }
        }

            >.emailDiv{
            background-color: rgba($color: #6B9080, $alpha: 0.80);
            grid-template-rows: 40px 50px;
            padding: 10px;
            border-radius: 10px;

            width: 80%;
            display: grid;
            align-items: center;
            justify-items: center;


            >h3{
                font-weight: bold;
                color: #F6FFF8;
            }

            >img{
                width: 50px;
                cursor: pointer;
            }
        }
            >.innerDivBox{
                
                display: grid;
                align-items: center;
                justify-items: center;
                grid-template-rows: 25px 125px 25px;
                background-color: rgba($color: #6B9080, $alpha: 0.80);
                padding: 10px;
                border-radius: 10px;
                width: 80%;

                >.submitTag{


                    background-color: #F6FFF8;
                    color: #6B9080;
                    border-radius: 5px;
                    padding: 5px;
                    cursor: pointer;

                }
                >p{

                    color: #F6FFF8;
                    font-weight: bold;

                }
                >.inputTagBox{
                height: 80%;
                width: 90%;
                max-height: 60px;
                max-width:180px;
                }
            }
            >.innerDiv{
                background-color: rgba($color: #6B9080, $alpha: 0.80);
                padding: 10px;
                border-radius: 10px;
                display: grid;
                align-items: center;
                justify-items: center;
                grid-template-rows: 25px 25px;
                width: 70%;
                >p{
                    color: #F6FFF8;
                    font-weight: bold;

                }
                >.inputTag{
                    width: 90%;

                };
            }

        }
    }


}
@media only screen and (min-width: 770px){
    @keyframes fadeIn {
0% {opacity: 0;}
100% {opacity: 1}
}

.divParent{

}
.contact_article.hide_contact_info{

}
.contact_header.hide_contact_header{

}
.contact_header{
    margin-top: 75px;
    >span{
    
            >h1{

                font-size: 2.5em;
            }
        }
}

.contact_article{

margin-bottom: 75px;
    >.inputSpan{

        min-width: 480px;
     
        width: 75%;

        >.inputDiv{
            grid-template-rows: 125px 125px 285px 100px 180px;
            >.orDiv{

                width: 75px;
                height: 75px;
            >h3{

            }
        }

            >.emailDiv{

                grid-template-rows: 40px 50px;
                width: 60%;
            >h3{
                font-size: 1.4em;
            }

            >img{

            }
        }
            >.innerDivBox{
                width: 80%;
                grid-template-rows: 35px 125px 35px;


                >.submitTag{


                background-color: #F6FFF8;
                color: #6B9080;
                border-radius: 5px;
                padding: 5px;
                cursor: pointer;

                }


                >p{
                    font-size: 1.2em;

                }
                >.inputTagBox{

                    height: 80%;
                    width: 90%;
                    max-height: 80px;
                    max-width:250px;
                }
            }
            >.innerDiv{
                width: 60%;
                grid-template-rows: 25px 25px;
                >p{
        
                    font-size: 1.2em;

                }
                >.inputTag{


                };
            }

        }
    }
}
}
@media only screen and (min-width: 1024px){

    @keyframes fadeIn {
0% {opacity: 0;}
100% {opacity: 1}
}

.divParent{

}
.contact_article.hide_contact_info{

}
.contact_header.hide_contact_header{

}
.contact_header{
    
    >span{
    
            >h1{

                font-size: 2.5em;
            }
        }
}

.contact_article{


    >.inputSpan{

        min-width: 770px;
     
        width: 40%;

        >.inputDiv{
            grid-template-rows: 125px 125px 300px 100px 180px;
            >.orDiv{

                width: 75px;
                height: 75px;
            >h3{

            }
        }

            >.emailDiv{

                grid-template-rows: 50px 60px;
                width: 70%;
            >h3{
                font-size: 1.4em;
            }

            >img{

            }
        }
            >.innerDivBox{
                width: 80%;
                grid-template-rows: 50px 150px 50px;



                >.submitTag{


                background-color: #F6FFF8;
                color: #6B9080;
                border-radius: 5px;
                padding: 5px;
                cursor: pointer;

                }
                >p{
                    font-size: 1.2em;

                }
                >.inputTagBox{

                    height: 80%;
                    width: 90%;
                    max-height: 100px;
                    max-width:300px;
                }
            }
            >.innerDiv{
                width: 50%;
                grid-template-rows: 30px 30px;
                >p{
        
                    font-size: 1.2em;

                }
                >.inputTag{
                    width: 70%;

                };
            }

        }
    }
}
}
</style>