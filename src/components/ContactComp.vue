<template>

    <div class="divParent">

        <!--displaying HTML-->

    <div class="divWrapper">

        <article class="contact_header">
                <span>
                <h1>CONTACT ME</h1>
                </span>
        </article>


        <article class="contact_article">

            <span class="inputSpan">
                <div class="inputDiv">

            
                    <div class="tagsSep">

                    <div class="innerDiv">
                    <p>Your Name</p>
                    <input class="inputTag" type="text" ref="userName">
                    </div>

                    <div class="innerDiv">
                    <p>Your Email</p>
                    <input class="inputTag" type="text" ref="userEmail">
                    </div>

                    </div>
                    <div class="boxSep">

                    <div class="innerDivBox">
                    <p>Your message</p>
                    <textarea class="inputTagBox" cols="30" rows="10" maxlength="300" ref="messageContent"></textarea>
                    <p class="submitTag" @click="submitText">Submit</p>

                    <!--displays a status message once it becomes defined && protecting the HTML-->

                    <p class="status_tag" v-if="status !== undefined">{{ status }}</p>
                    </div>

                    <div class="orDiv">
                        <h3>OR</h3>
                    </div>
                
                    <div class="emailDiv">
                    <h3>Direct Email me</h3>

                    <a href="mailto:cameron.ian.ronald.ord@outlook.com" class="a_tag">
                    <img src="~@/assets/jean-victor-balin-icon-letter-mail.svg">
                    </a>
                    </div>
                    </div>

                </div>  
            </span>
        </article>
    </div>
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

                //grabbing values from text boxes

                this.name_value = this.$refs['userName'].value
                this.email_value = this.$refs['userEmail'].value
                this.content_value = this.$refs['messageContent'].value


                //if the value from the text box is an empty string, sets it to null

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

                    //sending data through axios

                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/contact`,

                    method: 'POST',

                    data:{

                        name: this.name_value,
                        email: this.email_value,
                        content: this.content_value
                    }
                }).then((res)=>{

                    res;

                    //on success, displays a success message

                    this.status = 'message sent!';

                }).catch((err)=>{

                    //dynamically assigning error responses

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
    width: 100%;
    margin-top: 25px;
    margin-bottom: 25px;

    >.divWrapper{
        display: grid;
        align-items: center;
        justify-items: center;
        text-align: center;
        width: 100%;
        grid-template-rows: 0.5fr 2fr;

        >.contact_header{

            display: grid;
            align-items: center;
            justify-items: center;
            background-color: #6B9080;
            width: 100%;
            height: 100px;

            >span{

                display: grid;
                

                >h1{

                    border-bottom: #EAF4F4 solid 1px;
                    font-size: 1.6em;
                    color: #EAF4F4;

                }
            }
        }

        >.contact_article{

            display: grid;
            align-items: center;
            justify-items: center;
            width: 100%;


            >.inputSpan{
                display: grid;

                width: 100%;

                >.inputDiv{
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    grid-auto-flow: row;
                    row-gap: 25px;


                    >.boxSep{

                        display: grid;
                        align-items: center;
                        justify-items: center;
                        grid-auto-flow: row;
                        row-gap: 25px;
                        width: 100%;

                        >.emailDiv{

                            display: grid;
                            align-items: center;
                            justify-items: center;
                            background-color: #6B9080;
                            padding: 10px;
                            color: #EAF4F4;
                            border-radius: 5px;
                            grid-auto-flow: row;
                            row-gap: 10px;
                            width: 60%;
                            max-width: 225px;
                            
                            >h3{

                                color: #EAF4F4;


                            }

                            >a{

                                >img{
                                    width: 50px;
                                }
                            }

                        }
                        >.orDiv{

                            background-color: #6B9080;
                            align-items: center;
                            justify-items: center;
                            display: grid;
                            color: #EAF4F4;
                            width: 75px;
                            height: 75px;
                            border-radius: 50%;

                        }
                        >.innerDivBox{

                            padding: 10px;
                            border-radius: 5px;
                            background-color: #6B9080;
                            display: grid;
                            align-items: center;
                            justify-items: center;
                            grid-auto-flow: row;
                            row-gap: 25px;
                            width: 75%;
                            max-width: 275px;
                      
                            

                            >p{

                                color: #EAF4F4;
                                font-weight: 900;

                            }

                            >.inputTagBox{
                                width: 90%;
                                max-width: 200px;
                                max-height: 75px;
                            }

                            >.submitTag{

                                color: #6B9080;

                                padding: 10px;
                                border-radius: 5px;
                                cursor: pointer;
                                background-color: #EAF4F4;


                            }

                        }


                    }
                    >.tagsSep{
                        display: grid;
                        align-items: center;
                        justify-items: center;
                        grid-auto-flow: row;
                        row-gap: 20px;
                        width: 100%;
                  

                        >.innerDiv{
                            display: grid;
                            align-items: center;
                            justify-items: center;
                            grid-auto-flow: row;
                            row-gap: 10px;
                            padding: 10px;
                            border-radius: 5px;
                            width: 60%;
                            max-width: 225px;
                            background-color: #6B9080;
                            >p{
                                color: #EAF4F4;
                            }
                            >.inputTag{

                                width: 80%;
                                max-width: 200px;
                            }

                        }

                    }
                }
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

    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;


    >.divWrapper{
        display: grid;
        align-items: center;
        justify-items: center;
        text-align: center;
        width: 100%;
        grid-template-rows: 0.75fr 2fr;

        >.contact_header{

            display: grid;
            align-items: center;
            justify-items: center;
            background-color: #6B9080;
            width: 100%;
            height: 150px;

            >span{

                display: grid;
                

                >h1{

                    border-bottom: #EAF4F4 solid 1px;
                    font-size: 2em;
                    color: #EAF4F4;

                }
            }
        }

        >.contact_article{

            display: grid;
            align-items: center;
            justify-items: center;
            width: 100%;


            >.inputSpan{
                display: grid;

                width: 100%;

                >.inputDiv{
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    grid-auto-flow: row;
                    row-gap: 25px;


                    >.boxSep{

                        display: grid;
                        align-items: center;
                        justify-items: center;
                        grid-auto-flow: row;
                        row-gap: 25px;
                        width: 100%;

                        >.emailDiv{

                            display: grid;
                            align-items: center;
                            justify-items: center;
                            background-color: #6B9080;
                            padding: 10px;
                            color: #EAF4F4;
                            border-radius: 5px;
                            grid-auto-flow: row;
                            row-gap: 20px;
                            width: 60%;
                            max-width: 275px;
                            
                            >h3{

                                color: #EAF4F4;
                                font-size: 1.25em;


                            }

                            >a{

                                >img{
                                    width: 50px;
                                }
                            }

                        }
                        >.orDiv{

                            background-color: #6B9080;
                            align-items: center;
                            justify-items: center;
                            display: grid;
                            color: #EAF4F4;
                            width: 75px;
                            height: 75px;
                            border-radius: 50%;

                        }
                        >.innerDivBox{

                            padding: 10px;
                            border-radius: 5px;
                            background-color: #6B9080;
                            display: grid;
                            align-items: center;
                            justify-items: center;
                            grid-auto-flow: row;
                            row-gap: 25px;
                            width: 75%;
                            max-width: 300px;
                      
                            

                            >p{

                                color: #EAF4F4;
                                font-weight: 900;

                            }

                            >.inputTagBox{
                                width: 90%;
                                max-width: 250px;
                                max-height: 100px;
                            }

                            >.submitTag{

                                color: #6B9080;

                                padding: 10px;
                                border-radius: 5px;
                                cursor: pointer;
                                background-color: #EAF4F4;


                            }

                        }


                    }
                    >.tagsSep{
                        display: grid;
                        align-items: center;
                        justify-items: center;
                        grid-auto-flow: row;
                        row-gap: 25px;
                        width: 100%;
                  

                        >.innerDiv{
                            display: grid;
                            align-items: center;
                            justify-items: center;
                            grid-auto-flow: row;
                            row-gap: 20px;
                            padding: 10px;
                            border-radius: 5px;
                            width: 60%;
                            max-width: 225px;
                            background-color: #6B9080;
                            >p{
                                color: #EAF4F4;
                                font-weight: 900;
                            }
                            >.inputTag{

                                width: 80%;
                                max-width: 200px;
                            }

                        }

                    }
                }
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

    display: grid;
    align-items: center;
    justify-items: center;
    width: 100%;


    >.divWrapper{
        display: grid;
        align-items: center;
        justify-items: center;
        text-align: center;
        width: 100%;
        grid-template-rows: 0.75fr 2fr;

        >.contact_header{

            display: grid;
            align-items: center;
            justify-items: center;
            background-color: #6B9080;
            width: 25%;
            height: 150px;

            border-radius: 5px;
            >span{

                display: grid;
                

                >h1{

                    border-bottom: #EAF4F4 solid 1px;
                    font-size: 2em;
                    color: #EAF4F4;

                }
            }
        }

        >.contact_article{

            display: grid;
            align-items: center;
            justify-items: center;
            width: 100%;


            >.inputSpan{
                display: grid;

                width: 100%;

                >.inputDiv{
                    display: grid;
                    align-items: center;
                    justify-items: center;
             
                    

                    >.boxSep{

                        display: grid;
                        align-items: center;
                        justify-items: center;
                        grid-auto-flow: row;
                        row-gap: 25px;
                        width: 100%;

                        >.emailDiv{

                            display: grid;
                            align-items: center;
                            justify-items: center;
                            background-color: #6B9080;
                            padding: 10px;
                            color: #EAF4F4;
                            border-radius: 5px;
                            grid-auto-flow: row;
                            row-gap: 20px;
                            width: 60%;
                            max-width: 275px;
                            
                            >h3{

                                color: #EAF4F4;
                                font-size: 1.25em;


                            }

                            >a{

                                >img{
                                    width: 50px;
                                }
                            }

                        }
                        >.orDiv{

                            background-color: #6B9080;
                            align-items: center;
                            justify-items: center;
                            display: grid;
                            color: #EAF4F4;
                            width: 75px;
                            height: 75px;
                            border-radius: 50%;

                        }
                        >.innerDivBox{

                            padding: 10px;
                            border-radius: 5px;
                            background-color: #6B9080;
                            display: grid;
                            align-items: center;
                            justify-items: center;
                            grid-auto-flow: row;
                            row-gap: 25px;
                            width: 75%;
                            max-width: 300px;
                      
                            

                            >p{

                                color: #EAF4F4;
                                font-weight: 900;

                            }

                            >.inputTagBox{
                                width: 90%;
                                max-width: 250px;
                                max-height: 100px;
                            }

                            >.submitTag{

                                color: #6B9080;

                                padding: 10px;
                                border-radius: 5px;
                                cursor: pointer;
                                background-color: #EAF4F4;


                            }

                        }


                    }
                    >.tagsSep{
                        display: grid;
                        align-items: center;
                        justify-items: center;
                        grid-auto-flow: row;
                        row-gap: 25px;
                        width: 100%;
                  

                        >.innerDiv{
                            display: grid;
                            align-items: center;
                            justify-items: center;
                            grid-auto-flow: row;
                            row-gap: 20px;
                            padding: 10px;
                            border-radius: 5px;
                            width: 60%;
                            max-width: 225px;
                            background-color: #6B9080;
                            >p{
                                color: #EAF4F4;
                                font-weight: 900;
                            }
                            >.inputTag{

                                width: 80%;
                                max-width: 200px;
                            }

                        }

                    }
                }
            }
        }
    }
}

}
</style>