const vm = Vue.createApp({
  data() {
    return {
      firstName: "Suvi-Tuulia",
      lastName: "Vaara",
      url: 'http://www.google.com',
    //   Huono ratkaisu, ei html:ää koodiin
    raw_url: '<a href="https://www.google.fi" target="_blank">Kuukkeliin</a>',
    //   Huono ratkaisu, ei html:ää koodiin
      raw_html: '<input type="checkbox" id="jotain">',
      age: 20
    };
  },
  methods: {
    fullName () {
        return `Meitsin nomen est ${ this.firstName } ja sukunimi on ${ this.lastName.toUpperCase() }`
    },
    increment () {
        this.age++
    },
    updateLastName (msg, event) {
        event.preventDefault()
        console.log(msg)
        this.lastName = event.target.value
    }
  },
}).mount("#app");

// setTimeout(() => {
//   vm.firstName = "Aatu";
// }, 2000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Mika',
//             lastName: 'Vaara'
//         }
//     }
// }).mount('#app2')
