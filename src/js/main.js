import HeaderComponent from './templates/Header.js';
import HomeComponent from './templates/Hero.js';

const vm = new Vue({
  data: {
    message: 'a message here'
  },
  components: {
    'header-component': HeaderComponent,
    'home-component': HomeComponent
  }
}).$mount("#app");
