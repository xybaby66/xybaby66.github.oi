var myChart=echarts.init(document.getElementById("chart2"))
var option;
option = {
    title:{
        text:'图7 15-19岁各教育程度女性生育比例',
        textStyle: {
            color:'#fff'
        },
        left: 0,
        top: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        bottom:'2%',
        textStyle:{
            color:'#fff',
            fontSize:16
        }
    },
    grid: {
        left: '1%',
        right: '12%',
        bottom: '8%',
        top: '15%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        name:'百分比',
        nameTextStyle:{
            color:'#fff',
            fontSize:14
        },
        axisLabel:{
            color:'#fff',
            fontSize:14
        }
    },
    yAxis: {
        type: 'category',
        name:'教育程度',
        nameTextStyle:{
            color:'#fff',
            fontSize:14
        },
        data: ['高中及以上', '初中', '小学', '学前教育及以下'],
        axisLabel:{
            color:'#fff',
            fontSize: 14
        }
    },
    series: [
        {
            name: '乡',
            type: 'bar',
            data: [0.4157, 2.0967, 3.1436, 2.5582],
            barStyle:{
                color:'#fda913'
            },
            itemStyle:{
                color:'#fda913'
            }
        },
        {
            name: '镇',
            type: 'bar',
            data: [0.1972, 1.4496, 1.4948, 1.0987],
            barStyle:{
                color: '#fa264f'
            },
            itemStyle: {
                color: '#fa264f'
            }
        },
        {
            name:'城',
            type:'bar',
            data:[0.1090, 0.8725, 0.6590, 0.4231],
            barStyle: {
                color: '#ae36cc'
            },
            itemStyle: {
                color: '#ae36cc'
            }
        }
    ]
};
myChart.setOption(option)