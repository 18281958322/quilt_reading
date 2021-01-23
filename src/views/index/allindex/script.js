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
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      })
    },
    // ---------------------
    getchartTwo() {
      let myChart = this.$echarts.init(document.getElementById('chartTwo'));
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      })
    },
    // ------------
    getchartThree() {
      let myChart = this.$echarts.init(document.getElementById('chartThree'));
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      })
    },
    // -------------
    getchartfuro() {
      let myChart = this.$echarts.init(document.getElementById('chartfour'));
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      })
    },
    //   -----------------
    getchartFive() {
      let myChart = this.$echarts.init(document.getElementById('chartfivie'));
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70],
          type: 'bar',
          showBackground: true,
        }]
      })
    },
    //   -------------------
    getchartSix() {
      let myChart = this.$echarts.init(document.getElementById('chartsix'));
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      })
    },
  }
}