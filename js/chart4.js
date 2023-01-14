var data = [
    [
        [0.06, 0.81, 0.81, '北京', '城'],
        [0.1, 0.95, 0.95, '天津', '城'],
        [0.11, 1.31, 1.31, '河北', '城'],
        [0.09, 0.67, 0.67, '山西', '城'],
        [0.12, 1.02, 1.02, '内蒙古', '城'],
        [0.09, 0.92, 0.92, '辽宁', '城'],
        [0.1, 1.28, 1.28, '吉林', '城'],
        [0.12, 1.04, 1.04, '黑龙江', '城'],
        [0.08, 1.96, 1.96, '上海', '城'],
        [0.14, 1.72, 1.72, '江苏', '城'],
        [0.2, 5.41, 5.41, '浙江', '城'],
        [0.17, 2.12, 2.12, '安徽', '城'],
        [0.17, 3.7, 3.7, '福建', '城'],
        [0.14, 2.74, 2.74, '江西', '城'],
        [0.13, 0.89, 0.89, '山东', '城'],
        [0.1, 1.28, 1.28, '河南', '城'],
        [0.11, 1.1, 1.1, '湖北', '城'],
        [0.11, 1.63, 1.63, '湖南', '城'],
        [0.12, 4.88, 4.88, '广东', '城'],
        [0.12, 2.92, 2.92, '广西', '城'],
        [0.1, 4.83, 4.83, '海南', '城'],
        [0.17, 2.12, 2.12, '重庆', '城'],
        [0.18, 1.75, 1.75, '四川', '城'],
        [0.18, 9.65, 9.65, '贵州', '城'],
        [0.19, 4.29, 4.29, '云南', '城'],
        [0.35, 1.24, 1.24, '西藏', '城'],
        [0.09, 0.85, 0.85, '陕西', '城'],
        [0.14, 3.46, 3.46, '甘肃', '城'],
        [0.2, 12.69, 12.69, '青海', '城'],
        [0.14, 4.49, 4.49, '宁夏', '城'],
        [0.15, 1.16, 1.16, '新疆', '城']
    ],
    [
        [0.11, 0.58, 0.58, '北京', '镇'],
        [0.2, 0.42, 0.42, '天津', '镇'],
        [0.19, 3.53, 3.53, '河北', '镇'],
        [0.13, 1.44, 1.44, '山西', '镇'],
        [0.2, 1.75, 1.75, '内蒙古', '镇'],
        [0.16, 2.37, 2.37, '辽宁', '镇'],
        [0.14, 1.8, 1.8, '吉林', '镇'],
        [0.18, 2.2, 2.2, '黑龙江', '镇'],
        [0.16, 5.73, 5.73, '上海', '镇'],
        [0.23, 4.59, 4.59, '江苏', '镇'],
        [0.28, 6.02, 6.02, '浙江', '镇'],
        [0.24, 4.39, 4.39, '安徽', '镇'],
        [0.28, 6.17, 6.17, '福建', '镇'],
        [0.22, 3.99, 3.99, '江西', '镇'],
        [0.23, 3.81, 3.81, '山东', '镇'],
        [0.17, 3.29, 3.29, '河南', '镇'],
        [0.22, 2.61, 2.61, '湖北', '镇'],
        [0.2, 3.16, 3.16, '湖南', '镇'],
        [0.22, 4.87, 4.87, '广东', '镇'],
        [0.22, 8.06, 8.06, '广西', '镇'],
        [0.17, 11.05, 11.05, '海南', '镇'],
        [0.32, 4.39, 4.39, '重庆', '镇'],
        [0.31, 4.69, 4.69, '四川', '镇'],
        [0.31, 17.1, 17.1, '贵州', '镇'],
        [0.34, 11.93, 11.93, '云南', '镇'],
        [0.46, 13.86, 13.86, '西藏', '镇'],
        [0.22, 1.35, 1.35, '陕西', '镇'],
        [0.28, 4.65, 4.65, '甘肃', '镇'],
        [0.41, 12.39, 12.39, '青海', '镇'],
        [0.24, 10.89, 10.89, '宁夏', '镇'],
        [0.21, 3.11, 3.11, '新疆', '镇']
    ],
    [
        [0.18, 2.75, 2.75, '北京', '乡'],
        [0.29, 4.84, 4.84, '天津', '乡'],
        [0.31, 9.11, 9.11, '河北', '乡'],
        [0.27, 3.7, 3.7, '山西', '乡'],
        [0.42, 5.12, 5.12, '内蒙古', '乡'],
        [0.34, 4.45, 4.45, '辽宁', '乡'],
        [0.38, 3.77, 3.77, '吉林', '乡'],
        [0.36, 2.73, 2.73, '黑龙江', '乡'],
        [0.28, 7.71, 7.71, '上海', '乡'],
        [0.38, 8.95, 8.95, '江苏', '乡'],
        [0.43, 9.35, 9.35, '浙江', '乡'],
        [0.42, 10.57, 10.57, '安徽', '乡'],
        [0.43, 11.17, 11.17, '福建', '乡'],
        [0.38, 8.49, 8.49, '江西', '乡'],
        [0.38, 6.83, 6.83, '山东', '乡'],
        [0.33, 9.59, 9.59, '河南', '乡'],
        [0.37, 4.81, 4.81, '湖北', '乡'],
        [0.34, 6.96, 6.96, '湖南', '乡'],
        [0.3, 9.16, 9.16, '广东', '乡'],
        [0.38, 23.24, 23.24, '广西', '乡'],
        [0.24, 23.29, 23.29, '海南', '乡'],
        [0.51, 6.75, 6.75, '重庆', '乡'],
        [0.5, 10.99, 10.99, '四川', '乡'],
        [0.52, 40.96, 40.96, '贵州', '乡'],
        [0.55, 32.17, 32.17, '云南', '乡'],
        [0.72, 23.59, 23.59, '西藏', '乡'],
        [0.34, 3.33, 3.33, '陕西', '乡'],
        [0.53, 21.23, 21.23, '甘肃', '乡'],
        [0.61, 34.4, 34.4, '青海', '乡'],
        [0.49, 33.42, 33.42, '宁夏', '乡'],
        [0.36, 5.05, 5.05, '新疆', '乡']
    ]
];
var mychart=echarts.init(document.getElementById("chart4"))
var option;
option = {
    title:{
        text:'图8 2020年全国各地区城镇乡15岁以上教育程度小学及以下人口比例与15-19岁育龄妇女生育率散点图',
        textStyle: {
            color:'#fff'
        },
        left: 0,
        top: 0
    },
    legend: {
        bottom: '3%',
        data: ['城', '镇','乡'],
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
            fontSize: 14
        }
    },
    series: [
        {
            name: '城',
            data: data[0],
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
                color: '#ae36cc'
            }
        },
        {
            name: '镇',
            data: data[1],
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
                    color:'#fff',
                    fontSize:14
                }
            },
            itemStyle: {
                color: '#fa264f'
            }
        },
        {
            name: '乡',
            data: data[2],
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
                    color:'#fff',
                    fontSize:14
                }
            },
            itemStyle: {
                color: '#fda913'
            }
        }
    ]
};
mychart.setOption(option)