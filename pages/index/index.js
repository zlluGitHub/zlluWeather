// 引用百度地图微信小程序JSAPI模块 
import bmap from '../../libs/bmap-wx.min.js'
import { AK } from "../../static/index";
const innerAudioContext = wx.createInnerAudioContext();
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
        autoplay: true, //轮播自动播放
        interval: 3500, //暂停时间
        duration: 1000, //移动速度
        circular: true, //衔接滑动
        vertical: true,
        imgUrls: [
            'http://pgezsfbmq.bkt.clouddn.com/psb.jpg',
            'http://pgezsfbmq.bkt.clouddn.com/ty.jpg',
            'http://pgezsfbmq.bkt.clouddn.com/er.jpg',
            'http://pgezsfbmq.bkt.clouddn.com/12-2.jpg',
            'http://pgezsfbmq.bkt.clouddn.com/rt.jpg',
            'http://pgezsfbmq.bkt.clouddn.com/u=1235775941,4073853748&fm=26&gp=0.jpg',
            'http://pgezsfbmq.bkt.clouddn.com/u=3783951963,3204361524&fm=26&gp=0.jpg',
            'http://pgezsfbmq.bkt.clouddn.com/u=998585692,4236657467&fm=26&gp=0.jpg'
        ],
        greeting: [
            '问候，是一种甜蜜的挂念，愿我们温馨常在。',
            '那一世，我不为修来世，只为途中与你相遇。',
            '喜欢一个人总是藏不住，总会从眼睛里跑出来。',
            '我说着不放弃，却越来越没勇气继续爱你。',
            '没有彩虹的阳光，孤独时也要坚强。',
        ],

        musics: true,
        horn: 'labakai.png'
    },
    playMusic: function() {
        if (this.data.musics) {
            innerAudioContext.stop();
            this.setData({
                musics: !this.data.musics,
                horn: 'labaguan.png'
            });
        } else {
            innerAudioContext.play();
            this.setData({
                musics: !this.data.musics,
                horn: 'labakai.png'
            });
        }
    },
    onShow: function() {
        const that = this;
        // 新建百度地图对象 
        const BMap = new bmap.BMapWX({ ak: AK });
        const fail = data => {
            //console.log(data)
        };
        const success = data => {
                const weatherData = data.currentWeather[0];
                const otherWeather = data.originalData;
                otherWeather.results[0].weather_data[0].date = "今天";
                that.setData({
                    settings: globalData,
                    weatherData: weatherData,
                    date: weatherData.date.slice(0, 9),
                    realTime: weatherData.date.slice(14, 17).replace(')', ''),
                    update: weatherData.date.slice(3, 5) + '/' + weatherData.date.slice(6, 8),
                    index: otherWeather.results[0].index,
                    weather_data: otherWeather.results[0].weather_data
                });
                innerAudioContext.autoplay = this.data.musics;
                innerAudioContext.src =
                    "http://pgezraano.bkt.clouddn.com/SoBeautiful.mp3";

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