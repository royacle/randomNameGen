const app = Vue.createApp({
    data(){
        return{
            firstName: 'Jammie',
            lastName: 'Vladmin',
            email: 'j.vladmin@gmail.com',
            gender: 'male',
            phone: '0123-9876673',
            nat: 'US',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser(){
            const  res = await fetch('https://randomuser.me/api/')
            const { results } = await res.json()
            console.log(results)
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.phone = results[0].phone
            this.nat = results[0].nat
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')