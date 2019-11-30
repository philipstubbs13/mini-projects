# Vue Crash Course 2019

* <https://www.youtube.com/watch?v=Wy9q22isx3U>
* Anatomy of a component
* Output

```bash
<template>
  <div class="user">
    <h1>{{ user.name }} </h1>
  </div>
</template>
```

* Functionality

```bash
<script>
  export default {
    name: 'User',
    data(){
      return {
        user: { name: 'Brad' }
      }
    }
  }
</script>
```

* Style

```bash
<style scoped>
  h1 {
    font-size: 2rem;
  }
</style>
```

* Vue CLI 3
  * Awesome tool for generating and building Vue apps.
  * Features include Babel, TypeScript, ESLint, PostCSS and more.
  * Includes dev server with hot reload.
  * Includes Vue UI tool to manage your app in a graphical interface.
* Vuex for state management
  * Used to manage application level state (Similar to Redux, Flux, etc)
  * Serves as a central store for all components.
  * Uses actions to update global state and send down to components.
  * Used in larger applications.

* Install Vue CLI globally

```bash
npm install -g @vue/cli
vue --version
```

* Create application from command line:

```bash
vue create test
```

* Create application using user interface:

```bash
vue ui
```

* Build

```bash
npm run build
```
