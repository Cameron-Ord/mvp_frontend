import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import PhotoStream from '@/views/PhotoStream.vue'
import ImageLoader from '@/views/ImageLoader.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: LandingPage,
    name: 'Home',
    meta: [
      {
        title: 'Home',
      },
      {
        name: 'description',
        content: 'Welcome'
      },
      {
        name: 'author',
        content: 'Cameron Ord'
      }
    ]
  },
  {
    path: '/PhotoStream',
    component: PhotoStream,
    name: 'Photostream',
    meta: [
      {
        title: 'Photostream',
      },
      {
        name: 'description',
        content: 'Welcome'
      },
      {
        name: 'author',
        content: 'Cameron Ord'
      }
    ]
  },
  {
    path: '/ImageLoader',
    component: ImageLoader,
    name: 'Photo Viewer',
    meta: [
      {
        title: 'Photostream',
      },
      {
        name: 'description',
        content: 'Welcome'
      },
      {
        name: 'author',
        content: 'Cameron Ord'
      }
    ]
  },
  {
    path: '/AboutPage',
    component: AboutPage,
    name: 'About page',
    meta: [
      {
        title: 'about',
      },
      {
        name: 'description',
        content: 'Welcome'
      },
      {
        name: 'author',
        content: 'Cameron Ord'
      }
    ]
  },
  {
    path: '/ContactPage',
    component: ContactPage,
    name: 'Contact page',
    meta: [
      {
        title: 'Contact',
      },
      {
        name: 'description',
        content: 'Welcome'
      },
      {
        name: 'author',
        content: 'Cameron Ord'
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {

  let current_meta_tags = document.querySelectorAll(`meta`);

  for(let i = 0; i<current_meta_tags.length; i++){

    current_meta_tags[i].remove();
  }

  let new_meta_tags = to[`meta`];

  document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];

  for(let i = 0; i<new_meta_tags.length; i++){

    document.querySelector(`head`).insertAdjacentHTML(`beforeend`,
    
    `<meta name="${new_meta_tags[i][`name`]}"
    
    content="${new_meta_tags[i][`content`]}">`);


  }

  document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
    
  `<meta charset="utf-8">
  
  <meta http-equiv=""X-UA-Compatible" content="IE=edge">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">`
  
  );

  from;

  next();

}
);

export default router
