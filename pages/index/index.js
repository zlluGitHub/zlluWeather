// 引用百度地图微信小程序JSAPI模块 
import bmap from '../../libs/bmap-wx.min.js'
Page({ 
    data: { 
        weatherData: '',
        data:'',
        realTime:'',
        update:''
    }, 
    onLoad: function() { 
      const that = this; 
        // 新建百度地图对象 
        const BMap = new bmap.BMapWX({ 
            ak: 'dwoeAw7ffEi2KgGgm5SfwucjZi66zO7h' 
        }); 
        const fail = data=> { 
            console.log(data) 
        }; 
        const success = data=>{ 
            const weatherData = data.currentWeather[0]; 
            console.log(weatherData);
            const otherWeather = data.originalData;
            console.log()
            that.setData({ 
                weatherData: weatherData ,
                date:weatherData.date.slice(0,9),
                realTime:weatherData.date.slice(14,17),
                update:weatherData.date.slice(3,5)+'/'+weatherData.date.slice(6,8),
            }); 
        } 
        // 发起weather请求 
        BMap.weather({ 
            fail: fail, 
            success: success 
        }); 
    } 
})