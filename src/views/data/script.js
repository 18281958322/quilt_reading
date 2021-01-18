export default {
    name: 'index',
    data() {
      return {
        sidebarData: [
          {
            title: "统计",
            key: "s1",
            icon: "el-icon-user",
          },
          {
            title: "记录",
            key: "s2",
            icon: "el-icon-chat-dot-square",
          }
        ],
      }
    },
    methods: {
      subMenuOpens(index, path) {
        console.log('subMenuOpens', index, path,"2")
      },
      subMenuCloses(index, path) {
        console.log('subMenuCloses', index, path,"1")
      },
      activeChanges(index, path) {
        // console.log('activeChanges', index, path,"sss")
      }
    }
  }