export default {
  data() {
    return {
      value1: '',
    }
  },
  mounted() {
    this.getchartOne(); // 第一个图表
    this.getchartTwo(); // 第二个图表
    this.getchartThree(); // 第三个图表
    this.getchartfuro(); // 第四个图表
    this.getchartFive(); // 第五个图表
    this.getchartSix(); // 第六个图表
  },
  methods: {
    getchartOne() {
      let myChart = this.$echarts.init(document.getElementById('chartOne'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
    },
    // ---------------------
    getchartTwo() {
      let myChart = this.$echarts.init(document.getElementById('chartTwo'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
    },
    // ------------
    getchartThree() {
      let myChart = this.$echarts.init(document.getElementById('chartThree'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
    },
    // -------------
    getchartfuro() {
      let myChart = this.$echarts.init(document.getElementById('chartfour'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
    },
    //   -----------------
    getchartFive() {
      let myChart = this.$echarts.init(document.getElementById('chartfivie'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
    },
    //   -------------------
    getchartSix() {
      let myChart = this.$echarts.init(document.getElementById('chartsix'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
    },
  }
}