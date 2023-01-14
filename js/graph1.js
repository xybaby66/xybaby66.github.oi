var myChart = echarts.init(document.getElementById('main'));
var option = {
    title:{
        text:'图4 1998-2020中国青春期生育率',
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
    data: ['16岁', '17岁', '18岁', '19岁' ],
    orient:'horizontal',
    bottom:'30',
    textStyle:{
        color:'#FFF',
        fontSize:16
}
},
    grid: {
    left: '50',
    right: '50',
    bottom: '70',
    top:'20%',
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
    data: ['1998', '1999', '2000', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
    '2009', '2010', '2012', '2013', '2014', '2015', '2016','2017', '2018', '2019', '2020'],
    nameTextStyle:{
        color:'#FFF',
        fontSize:16
    },
    axisLabel:{
    color:'#FFF',
        fontSize:14
}

},
    yAxis: {
    show:true,
    type: 'value',
    name:'青春期生育率‰',
    nameLocation:'end',
    nameTextStyle:{
        color:'#FFF',
        fontSize: 16
    },
    axisLabel:{
    color:'#FFF',
        fontSize:14
}
},
    series: [
{
    name: '16岁',
    type: 'line',
    data: [0.27, 0.21, 0.30, 0.68, 0.64, 0.85, 1.16, 0.66, 0.59, 0.03, 0.25, 1.36, 1.24, 1.45, 2.03, 2.63, 3.14, 2.27, 2.22, 3.24, 3.48],
    itemStyle: {
    color: "#f5cae7"
}
},
{
    name: '17岁',
    type: 'line',
    data: [1.19, 1.18, 1.00, 0.76, 0.59, 2.40, 3.00, 3.00, 2.41, 1.11, 1.84, 2.64, 4.82, 5.46, 6.19, 9.08, 6.69, 6.74, 5.87, 6.77, 9.33],
    itemStyle: {
    color: "#ee99d2"
}
},
{
    name: '18岁',
    type: 'line',
    data: [3.54, 3.75, 3.70, 2.16, 4.51, 7.27, 7.82, 8.94, 6.37, 6.20, 5.11, 6.95, 7.69, 10.39, 13.71, 15.52, 12.29, 12.33, 13.01, 14.94, 18.62],
    itemStyle: {
    color: "#e870c0"
}
},
{
    name: '19岁',
    type: 'line',
    data: [9.52,9.22,9.30,10.46,8.82,20.84,21.44,25.14,14.87,11.98,17.43, 6.74, 14.65, 15.63, 16.42, 24.59, 18.68, 18.82, 19.52, 23.48, 29.73],
    itemStyle: {
    color: "#E248AF"
}
}
    ]
};
    myChart.setOption(option);
