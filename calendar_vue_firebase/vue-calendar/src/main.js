import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAY91SonoERBBARRC6q-qMnADeMWTATel8",
  authDomain: "vue-calendar-e5afe.firebaseapp.com",
  databaseURL: "https://vue-calendar-e5afe.firebaseio.com",
  projectId: "vue-calendar-e5afe",
  storageBucket: "vue-calendar-e5afe.appspot.com",
  messagingSenderId: "931718487864",
  appId: "1:931718487864:web:51c145283be8708d1d6bcd"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
