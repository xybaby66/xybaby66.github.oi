    var myChart=echarts.init(document.getElementById("chart1"))
    var option = {
    title:{
        text:'图5 1998-2020全国6岁及以上分性别教育程度小学及以下人口比例',
        textStyle: {
            color:'#fff'
        },
        left: 0,
        top: 0
    },
    tooltip: {
    trigger: 'axis'
},
    legend: {
    data: ['全国', '男', '女'],
    bottom: '2%',
    textStyle: {
    color: '#fff',
        fontSize:16
}
},
    grid: {
    left: '3%',
    right: '10%',
    bottom: '10%',
    top: '15%',
    containLabel: true
},
    toolbox: {
    feature: {
    saveAsImage: {}
}
},
    xAxis: {
    type: 'category',
    boundaryGap: false,
    name:'年份',
    nameTextStyle:{
    color:'#fff',
        fontSize:14
},
    data: [
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020'
    ],
    axisLabel:{
    color:'#fff',
        fontSize:13
}
},
    yAxis: {
    type: 'value',
    name:'比例',
    nameTextStyle: {
    color:'#fff',
        fontSize:14
    },
    axisLabel:{
        fontSize:13
    }
},

    series: [
{
    name: '男',
    type: 'line',
    data: [
    0.49, 0.47, 0.46, 0.42, 0.41, 0.4, 0.38, 0.36, 0.38, 0.36, 0.35, 0.33,
    0.32, 0.29, 0.29, 0.28, 0.28, 0.27, 0.28, 0.27, 0.27, 0.27, 0.26
    ],
    lineStyle: {
    color: '#316bf3'
},
    itemStyle: {
    color: '#316bf3'
}
},
{
    name: '女',
    type: 'line',
    data: [
    0.61, 0.6, 0.58, 0.54, 0.52, 0.51, 0.49, 0.46, 0.49, 0.47, 0.45, 0.44,
    0.42, 0.38, 0.38, 0.36, 0.35, 0.36, 0.36, 0.36, 0.35, 0.35, 0.35
    ],
    lineStyle:{
    color: '#d22e96'
},
    itemStyle: {
    color: '#d22e96'
}
}
    ],
    axisLabel:{
    color:'#fff',
}
};
    myChart.setOption(option);