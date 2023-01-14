var myChart = echarts.init(document.getElementById('fifth'));
option = {
    title: {
        text: '图11 广东省分年龄组未成年流动人口性别比例',
        left: 0,
        top: 0,
        textStyle: {
            color: '#FFF',
        }
    },
    legend: {
        data: ['男', '女'],
        orient:'horizontal',
        bottom: '2%',
        textStyle:{
            color:'#FFF',
            fontSize:16
        }
    },
    tooltip: {
        trigger: "axis",
        axisPointer:{
            type:"shadow"
        }
    },
    grid: {
        left: '5%',
        right: '12%',
        bottom: '10%',
        top:'15%',
        containLabel: true
    },
    dataset: {
        source: [
            ['age', '男', '女'],
            ['0-5岁', 55.96, 44.04],
            ['6-11岁', 58.24, 41.76],
            ['12-14岁', 56.44, 43.56],
            ['15-17岁', 47.78, 52.22]
        ]
    },
    xAxis: {
        type: 'category',
        name:'年龄段',
        nameLocation:'end',
        nameTextStyle:{
            color:'#FFF',
            fontSize:14
        },
        axisLabel: {
            color: '#FFF',
            fontSize: 13
        }
    },
    yAxis: {
        name:'比例（%）',
        nameLocation:'end',
        nameTextStyle:{
            color:'#FFF',
            fontSize:14
        },
        axisLabel: {
            color: '#FFF',
            fontSize:13
        }
    },
    series: [
        {
            type: 'bar',
            barWidth:"30%",
            itemStyle: {
                color: "#316bf3",
                barBorderRadius:5
            }
        },
        {
            type: 'bar',
            barWidth:"30%",
            itemStyle: {
                color: "#d22e96",
                barBorderRadius:5
            }
        }]
};
myChart.setOption(option);
window.addEventListener("resize",function (){
    myChart.resize();
});