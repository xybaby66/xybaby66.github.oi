var data=[
    [0.08, 0.96, 0.96, '北京'],
    [0.14, 1.4, 1.4, '天津'],
    [0.21, 4.3, 4.3, '河北'],
    [0.17, 1.7, 1.7, '山西'],
    [0.24, 2.13, 2.13, '内蒙古'],
    [0.17, 1.98, 1.98, '辽宁'],
    [0.21, 2.19, 2.19, '吉林'],
    [0.21, 1.78, 1.78, '黑龙江'],
    [0.11, 2.99, 2.99, '上海'],
    [0.23, 3.68, 3.68, '江苏'],
    [0.28, 6.21, 6.21, '浙江'],
    [0.3, 5.8, 5.8, '安徽'],
    [0.28, 5.98, 5.98, '福建'],
    [0.26, 5, 5, '江西'],
    [0.25, 3.16, 3.16, '山东'],
    [0.22, 4.74, 4.74, '河南'],
    [0.23, 2.35, 2.35, '湖北'],
    [0.23, 3.89, 3.89, '湖南'],
    [0.18, 5.83, 5.83, '广东'],
    [0.26, 10.85, 10.85, '广西'],
    [0.17, 12.57, 12.57, '海南'],
    [0.3, 3.68, 3.68, '重庆'],
    [0.34, 5.98, 5.98, '四川'],
    [0.37, 24.6, 24.6, '贵州'],
    [0.4, 18.09, 18.09, '云南'],
    [0.59, 16.29, 16.29, '西藏'],
    [0.21, 1.68, 1.68, '陕西'],
    [0.36, 11.14, 11.14, '甘肃'],
    [0.41, 20.86, 20.86, '青海'],
    [0.28, 15.4, 15.4, '宁夏'],
    [0.25, 3.21, 3.21, '新疆']
]
var mychart=echarts.init(document.getElementById("chart5"))
var option;
option={
    title:{
        text:'图9 2020年全国各地区15岁以上教育程度小学及以下人口比例与15-19岁育龄妇女生育率散点图',
        textStyle: {
            color:'#fff'
        },
        left: 0,
        top: 0
    },
    legend: {
        bottom: '3%',
        data: ['全国'],
        textStyle:{
            color:"#fff",
            fontSize:16
        }
    },
    grid: {
        left: '8%',
        top: '15%',
        right: '12%',
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLabel:{
            color:"#fff",
            fontSize:13
        },
        name:"教育程度小学及\n以下人口比例（%）",
        nameTextStyle:{
            color:"#fff",
            fontSize: 14,
            lineHeight:21
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            },
        },
        axisLabel:{
            color:"#fff",
            fontSize:13
        },
        scale: true,
        name:"生育率（‰）",
        nameTextStyle:{
            color:"#fff",
            fontSize:14
        }
    },
    series: [
        {
            name: '全国',
            data: data,
            type: 'scatter',
            symbolSize: function (data) {
                return Math.sqrt(data[2]) *8;
            },
            emphasis: {
                focus: 'series',
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3]+' '+param.data[2]+'‰';
                    },
                    position: 'top',
                    color: '#fff',
                    fontSize:14
                }
            },
            itemStyle: {
                color: '#ee99d2'
            }
        }
    ]
}
mychart.setOption(option)