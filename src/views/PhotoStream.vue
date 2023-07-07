<template>
    <div>

    </div>
</template>

<script>
    export default {
        mounted(){

            this.delete_classes();

        },

        methods:{

            delete_classes(){
                let menu_btn = document.querySelector(`.hamburger`);

                let mobile_menu = document.querySelector(`.mobile_nav`);

                let get_div = document.querySelector(`body`);

                let hide_bar = document.querySelector('.wrapper_span');
                
                menu_btn.classList.remove(`is-active`);
                
                mobile_menu.classList.remove(`is-active`);

                get_div.classList.remove(`no-scroll`);

                hide_bar.classList.remove('hide_bar');
            },

        }

    }
</script>


<style lang="scss" scoped>

</style>