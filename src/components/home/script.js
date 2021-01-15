export default {
  data() {
    return {
      activeClass: 0,
      list: [
        { route: "/", title: "首页" },
        { route: "/data", title: "数据" },
        { route: "/user", title: "用户" },
        { route: "/content", title: "内容" },
        { route: "/operations", title: "运营" },
        { route: "/distribution", title: "分销" },
        { route: "/author", title: "作者" },
        { route: "/setup", title: "设置" },
      ]
    }
  },
  created() {
  },
  computed: {
    navActive() {
      return function(item) {
        // console.log(this.$route.path, item)
        return this.$route.path === item.route
      }
    },
  },
  methods: {
    // clickall(id,index){
    //   this.activeClass = index;
    //   console.log(id,index)
    //   if(index == 0){
    //     this.$router.push('/userlist');
    //   }else if(index == 1){
    //     this.$router.push('/userlist');
    //   }else if(index == 2){
    //     this.$router.push('/userlist');
    //   }else if(index == 3){
    //     this.$router.push('/novel');
    //   }else if(index == 4){
    //     this.$router.push('/userlist');
    //   }else if(index == 5){
    //     this.$router.push('/userlist');
    //   }else if(index ==6){
    //     this.$router.push('/userlist');
    //   }else if(index ==7){
    //     this.$router.push('/userlist');
    //   }
    // }
  }
}