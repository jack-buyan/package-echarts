export default {
    data() {
        return {
            koiTime: null,
            kHOne: 200,
            kHTwo: 500,
            kHThree: 300,
            kHFour: 500,
            kHFive: 450,
            kHSix: 300,
            kHSeven: 400,
            kHEight: 400,
            screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        }
    },
    mounted() {
        // 页面大小改变时触发
        window.addEventListener('resize', this.getScreenHeight, false);
        // 页面大小改变时触发
        window.addEventListener('resize', this.getScreenWidth, false);
        this.resizeScreen()
    },

    methods: {
        resizeScreen() {
            this.koiTime = setInterval(() => {
                this.getScreenHeight();
                this.getScreenWidth();
            }, 200)
        },

        beforeDestroy() {
            clearInterval(this.koiTime);
            this.koiTime = null;

            // 页面大小改变时触发
            window.removeEventListener('resize', this.getScreenHeight, false);
            // 页面大小改变时触发
            window.removeEventListener('resize', this.getScreenWidth, false);
        },

        // 获取浏览器高度进行自适应
        getScreenHeight() {
            this.screenHeight = window.innerHeight || document.documentElement.innerHeight || document.body.clientHeight;
            // 四舍五入取整数
            this.kHOne = Math.round(this.screenHeight * 0.275);
            this.kHTwo = Math.round(this.screenHeight * 0.318);
            this.kHThree = Math.round(this.screenHeight * 0.18);
            this.kHFour = Math.round(this.screenHeight * 0.38);
            this.kHFive = Math.round(this.screenHeight * 0.385);
            this.kHSix = Math.round(this.screenHeight * 0.3);
            this.kHSeven = Math.round(this.screenHeight * 0.32);
            this.kHEight = Math.round(this.screenHeight * 0.325);
        },
        // 字体大小根据宽度自适应
        getScreenWidth() {
            this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }
    },
}