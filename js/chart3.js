var mychart=echarts.init(document.getElementById("chart3"))
var option;
option = {
    title:{
        text:'图6 1998-2020全国城镇乡6岁及以上教育程度小学及以下人口比例',
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
        data: ['城', '镇', '乡'],
        bottom:'2%',
        textStyle:{
            color:'#fff',
            fontSize:16
        }
    },
    grid: {
        left: '3%',
        right: '8%',
        bottom: '12%',
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
            color:"#fff",
            fontSize:14
        },
        data: ['1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
            '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        axisLabel:{
            color:"#fff",
            fontSize:13
        }
    },
    yAxis: {
        type: 'value',
        name:"比例",
        nameTextStyle:{
            color:"#fff",
            fontSize: 14
        },
        axisLabel:{
            color:"#fff",
            fontSize:13
        }
    },
    series: [
        {
            name: '城',
            type: 'line',
            data: [0.35 ,0.35 ,0.33 ,0.27 ,0.26 ,0.26 ,0.25 ,0.24 ,0.27 ,0.22 ,0.21 ,0.20 ,
                0.20 ,0.18 ,0.18 ,0.17 ,0.17 ,0.17 ,0.17 ,0.18 ,0.17 ,0.17 ,0.18],
            lineStyle: {
                color: '#ae36cc'
            },
            itemStyle: {
                color: '#ae36cc'
            }
        },
        {
            name: '镇',
            type: 'line',
            data: [0.35 ,0.35 ,0.35 ,0.37 ,0.34 ,0.36 ,0.34 ,0.33 ,0.37 ,0.38 ,0.36 ,0.36 ,
                0.35 ,0.30 ,0.29 ,0.29 ,0.28 ,0.30 ,0.30 ,0.29 ,0.29 ,0.30 ,0.30],
            lineStyle: {
                color: '#fa264f'
            },
            itemStyle: {
                color: '#fa264f'
            }
        },
        {
            name: '乡',
            type: 'line',
            data: [0.64 ,0.63 ,0.61 ,0.58 ,0.57 ,0.56 ,0.54 ,0.52 ,0.54 ,0.52 ,0.50 ,0.48 ,
                0.47 ,0.45 ,0.44 ,0.44 ,0.43 ,0.43 ,0.44 ,0.44 ,0.43 ,0.43 ,0.43 ],
            lineStyle:{
                color:'#fda913'
            },
            itemStyle:{
                color:'#fda913'
            }
        }
    ]
};
mychart.setOption(option)