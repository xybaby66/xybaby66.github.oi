var myChart=echarts.init(document.getElementById('map1'))
var data=[
    [ {date: 2000, name: '北京', value: 1.39},
        {date: 2000, name: '天津', value: 2.3},
        {date: 2000, name: '河北', value: 0.66},
        {date: 2000, name: '山西', value: 12.94},
        {date: 2000, name: '内蒙古', value: 4.41},
        {date: 2000, name: '辽宁', value: 4.63},
        {date: 2000, name: '吉林', value: 3.08},
        {date: 2000, name: '黑龙江', value: 4.28},
        {date: 2000, name: '上海', value: 3.41},
        {date: 2000, name: '江苏', value: 2.76},
        {date: 2000, name: '浙江', value: 2.37},
        {date: 2000, name: '安徽', value: 2.02},
        {date: 2000, name: '福建', value: 1.48},
        {date: 2000, name: '江西', value: 12.28},
        {date: 2000, name: '山东', value: 0.1},
        {date: 2000, name: '河南', value: 2.09},
        {date: 2000, name: '湖北', value: 2.81},
        {date: 2000, name: '湖南', value: 3.22},
        {date: 2000, name: '广东', value: 3.25},
        {date: 2000, name: '广西', value: 7.57},
        {date: 2000, name: '海南', value: 15.81},
        {date: 2000, name: '重庆', value: 9.06},
        {date: 2000, name: '四川', value: 13.36},
        {date: 2000, name: '贵州', value: 26.76},
        {date: 2000, name: '云南', value: 26.94},
        {date: 2000, name: '西藏', value: 14.68},
        {date: 2000, name: '陕西', value: 4.91},
        {date: 2000, name: '甘肃', value: 6.46},
        {date: 2000, name: '青海', value: 27.71},
        {date: 2000, name: '宁夏', value: 22.8},
        {date: 2000, name: '新疆', value: 20.14}],
    [{date: 2010, name: '北京', value: 1.06},
        {date: 2010, name: '天津', value: 3.78},
        {date: 2010, name: '河北', value: 2.43},
        {date: 2010, name: '山西', value: 4.22},
        {date: 2010, name: '内蒙古', value: 4.07},
        {date: 2010, name: '辽宁', value: 4.45},
        {date: 2010, name: '吉林', value: 5.2},
        {date: 2010, name: '黑龙江', value: 5.71},
        {date: 2010, name: '上海', value: 4.08},
        {date: 2010, name: '江苏', value: 5.86},
        {date: 2010, name: '浙江', value: 5.64},
        {date: 2010, name: '安徽', value: 8.08},
        {date: 2010, name: '福建', value: 4.34},
        {date: 2010, name: '江西', value: 7.18},
        {date: 2010, name: '山东', value: 0.8},
        {date: 2010, name: '河南', value: 4.72},
        {date: 2010, name: '湖北', value: 5.75},
        {date: 2010, name: '湖南', value: 5.29},
        {date: 2010, name: '广东', value: 2.5},
        {date: 2010, name: '广西', value: 9.87},
        {date: 2010, name: '海南', value: 14.23},
        {date: 2010, name: '重庆', value: 5.86},
        {date: 2010, name: '四川', value: 5.27},
        {date: 2010, name: '贵州', value: 19.03},
        {date: 2010, name: '云南', value: 21.28},
        {date: 2010, name: '西藏', value: 7.73},
        {date: 2010, name: '陕西', value: 2.62},
        {date: 2010, name: '甘肃', value: 5.46},
        {date: 2010, name: '青海', value: 16.34},
        {date: 2010, name: '宁夏', value: 14.25},
        {date: 2010, name: '新疆', value: 12.16}],
    [ {date: 2020, name: '北京', value: 0.96},
        {date: 2020, name: '天津', value: 1.4},
        {date: 2020, name: '河北', value: 4.3},
        {date: 2020, name: '山西', value: 1.7},
        {date: 2020, name: '内蒙古', value: 2.13},
        {date: 2020, name: '辽宁', value: 1.98},
        {date: 2020, name: '吉林', value: 2.19},
        {date: 2020, name: '黑龙江', value: 1.78},
        {date: 2020, name: '上海', value: 2.99},
        {date: 2020, name: '江苏', value: 3.68},
        {date: 2020, name: '浙江', value: 6.21},
        {date: 2020, name: '安徽', value: 5.8},
        {date: 2020, name: '福建', value: 5.98},
        {date: 2020, name: '江西', value: 5},
        {date: 2020, name: '山东', value: 3.16},
        {date: 2020, name: '河南', value: 4.74},
        {date: 2020, name: '湖北', value: 2.35},
        {date: 2020, name: '湖南', value: 3.89},
        {date: 2020, name: '广东', value: 5.83},
        {date: 2020, name: '广西', value: 10.85},
        {date: 2020, name: '海南', value: 12.57},
        {date: 2020, name: '重庆', value: 3.68},
        {date: 2020, name: '四川', value: 5.98},
        {date: 2020, name: '贵州', value: 24.6},
        {date: 2020, name: '云南', value: 18.09},
        {date: 2020, name: '西藏', value: 16.29},
        {date: 2020, name: '陕西', value: 1.68},
        {date: 2020, name: '甘肃', value: 11.14},
        {date: 2020, name: '青海', value: 20.86},
        {date: 2020, name: '宁夏', value: 15.4},
        {date: 2020, name: '新疆', value: 3.21}]
]
var option={
    timeline:{
        axisType:'category',
        data:[
            '2000年',
            '2010年',
            '2020年'
        ],
        autoPlay:false,
        playInterval: 800,
        left: '10%',
        right: '10%',
    },
    baseOption: {
        backgroundColor:'#00102a',
        visualMap: {
            max: 28,
            min: 0,
            calculable: true,
            inRange: {
                color: [
                    '#f2b6cd',
                    '#e47096',
                    '#c02886',
                ],
            },
            text: ['High','Low'],
            textStyle:{
                color:'#ffffff'
            }
        },
        tooltip: {
            formatter:'{a}<br />{b}:{c}‰'
        },
        series:[
            {
                type:'map',
                name:'青少年生育率',
                mapType:'china',
                roam: true,
                label:{
                    show:true,
                    color: '#4d4d4d',
                },
                itemStyle:{
                    areaColor:'#e6e6e6',
                    borderColor:'#ffffff',
                    emphasis:{
                        areaColor: '#10d7ad'
                    }
                },
                select:'disable',
            },
        ],
    },
    options:[
        {
            series: {
                data:data[0],
            },
        },
        {
            series: {
                data:data[1],
            },
        },
        {
            series: {
                data:data[2],
            },
        },
    ]
}
myChart.setOption(option)