export default {
  data() {
    return {
      activeClass: 0,
      list: [{
          id: 1,
          value: '首页'
        },
        {
          id: 2,
          value: '数据'
        },
        {
          id: 3,
          value: '用户'
        },
        {
          id: 4,
          value: '内容'
        },
        {
          id: 5,
          value: '运营'
        },
        {
          id: 6,
          value: '分销'
        },
        {
          id: 7,
          value: '作者'
        },
        {
          id: 8,
          value: '设置'
        }
      ]
    }
  },
  methods: {
    clickall(id,index){
      this.activeClass = index;
      console.log(id,index)
      if(index == 0){
        this.$router.push('/userlist');
      }else if(index == 1){
        this.$router.push('/userlist');
      }else if(index == 2){
        this.$router.push('/userlist');
      }else if(index == 3){
        this.$router.push('/novel');
      }else if(index == 4){
        this.$router.push('/userlist');
      }else if(index == 5){
        this.$router.push('/userlist');
      }else if(index ==6){
        this.$router.push('/userlist');
      }else if(index ==7){
        this.$router.push('/userlist');
      }
    }
  }
}