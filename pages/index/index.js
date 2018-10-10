// 引用百度地图微信小程序JSAPI模块 
import bmap from '../../libs/bmap-wx.min.js'
import { AK } from "../../static/index";
const { globalData } = getApp();
Page({
    data: {
        weatherData: '',
        data: '',
        realTime: '',
        update: '',
        index: [],
        weather_data: [],
        settings: null,
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        autoplay: true, //轮播自动播放
        interval: 2000, //暂停时间
        duration: 1000, //移动速度
        indicatorDots: true,
    },
    onShow: function() {
        const that = this;
        // 新建百度地图对象 
        const BMap = new bmap.BMapWX({
            ak: AK
        });
        const fail = data => {
            console.log(data)
        };
        const success = data => {
                const weatherData = data.currentWeather[0];
                const otherWeather = data.originalData;
                otherWeather.results[0].weather_data[0].date = "今天";


                that.setData({
                    settings: globalData,
                    weatherData: weatherData,
                    date: weatherData.date.slice(0, 9),
                    realTime: weatherData.date.slice(14, 17),
                    update: weatherData.date.slice(3, 5) + '/' + weatherData.date.slice(6, 8),
                    index: otherWeather.results[0].index,
                    weather_data: otherWeather.results[0].weather_data
                });
            }
            // 发起weather请求 
        BMap.weather({
            fail: fail,
            success: success,
            location: globalData.locations
        });

    },
    search() {
        wx.navigateTo({
            url: '../../pages/search/search'
        })
    }

})