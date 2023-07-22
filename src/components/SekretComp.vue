<template>
    <div>
        <article>

            <span>

            <div class="login_div" v-if="cookieStatus === null">

                <input type="text" ref="userInput">
                <input type="password" ref="passInput" @keyup.enter="admin_login">

                <p @click="admin_login">log in</p>

            </div>

            <div class="upload_div">

                <input type="file" multiple ref="upload_file" class="files_input">
                <input type="text" placeholder="description" ref="file_description">
                <input type="text" placeholder="type" ref="file_type" @keyup.enter="uploadImage">
                <p class="upload_button" @click="uploadImage">upload</p>

                <p v-if="status !== undefined">{{ status }}</p>

            </div>

            </span>
        </article>
    </div>
</template>

<script>
import Cookies from 'vue-cookies';
import axios from 'axios';

export default {

    data() {
        return {
            status:undefined,
            cookieStatus: null
        }
    },

    mounted(){

    },

    methods:{


        uploadImage(){
         
            let form = new FormData();

            for(let i=0; i<this.$refs['upload_file']['files'].length; i++){
            form.append("uploaded_image", this.$refs["upload_file"]["files"][i]);
            }
            form.append("description", this.$refs["file_description"].value);
            form.append("type", this.$refs['file_type'].value);
            form.append("token", this.cookieStatus);

            axios({

                url:`${process.env.VUE_APP_BASE_DOMAIN}/api/image_upload`,
                method: 'POST',
                headers:{

                    "Content-Type": "multipart/form-data",
                },

                data: form
            }).then((res) =>{
                res;
                this.status = 'images uploaded!'
            }).catch((err) =>{
                err;
                this.status = 'something went wrong'
            })

        },

        admin_login(){



            axios({

                url:`${process.env.VUE_APP_BASE_DOMAIN}/api/admin-login`,

                method: 'POST',

                data:{
                    username: this.$refs['userInput'].value,
                    password: this.$refs['passInput'].value,
                }

            }).then((res)=>{

                res;
     
                this.cookieStatus = res['data'][0]['token'];
                Cookies.set('admin_token', res['data'][0]['token']);

                console.log(this.cookieStatus)
                
            }).catch((err)=>{

                err;

                this.status ='invalid login'
            })
        }

    }
}
</script>

<style lang="scss" scoped>

article{

    display: grid;
    align-items: center;
    justify-items: center;

    width: 100%;
    >span{

        width: 100%;
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-rows: 1fr 1fr;
        >.login_div{
            display: grid;
            align-items: center;
            justify-items: center;
            text-align: center;
            grid-template-rows: 3vh 3vh 4.3vh;

            >p{
                cursor: pointer;
                background-color: black;
                color: white;
                padding: 5px;
                border-radius: 5px;
            }
        }

        >.upload_div{

            grid-template-rows: 3vh 3vh 3vh 4.3vh;
            text-align: center;
            display: grid;
            align-items: center;
            justify-items: center;

            >.files_input{

                transform: translateX(30px);
                justify-self: center;
                align-self: center;

            }
            >.upload_button{

                cursor: pointer;
                background-color: black;
                color: white;
                padding: 5px;
                border-radius: 5px;
            }
    }
    }
}

</style>