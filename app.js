//app.js
App({
    globalData: {
        indicatorDots: false,
        vertical: false,
        autoplay: true,
        circular: true,
        interval: 5000,
        duration: 800,
        locations: ""
    },
    changeLocation: function(e) {
        this.globalData.locations = `${e.lng},${e.lat}`;
    },
    changeIndicatorDots: function(e) {

        this.globalData.indicatorDots = e;
    },
    changeVertical: function(e) {
        this.globalData.vertical = e;
    },
    changeAutoplay: function(e) {
        this.globalData.autoplay = e;
    },
    intervalChange: function(e) {
        this.globalData.interval = e;
    },
    isCircular: function(e) {
        this.globalData.circular = e;
    },
    durationChange: function(e) {
        this.globalData.duration = e;
    }
});