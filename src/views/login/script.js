export default {
  data() {
    return {
      checked: false,
      username: 'admin',
      password: 'admin123'
    }
  },
  methods: {
    login() {
        if(this.username == 'admin' && this.password == 'admin123'){
            this.$router.push('/userlist');
        }
    }
  }
}
