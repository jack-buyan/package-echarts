import CryptoJS from 'crypto-js'
import router from '@/router'
var cryptoObj = {
    /* 加密 */
    encryptFunc: (message) => {
        var key = 'ede16d438c38862c';//前后端约定好的秘钥
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var encrypted = CryptoJS.AES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();

    },

    //获取精确
    gettime: () => {
        var time = Date.parse(new Date()).toString(); //精确到毫秒
        return time.substr(0, 10); //精确到秒
    },



}

export default cryptoObj;


