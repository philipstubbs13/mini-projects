const app = Vue.createApp({
  data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      x: 0,
      y: 0,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg' },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg'},
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg'}
      ]
    }
  },
  methods: {
    changeTitle(title) {
      // this.title = 'Words of Randianced'
      this.title = title
    },
    toggleShowBooks() {
      this.s,howBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')