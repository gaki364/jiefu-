import CryptoJS from 'crypto-js';

// 从LocalStore 获取数据
function getLocalStoreageItem(key) {
    return localStorage.getItem(key);
}

// 删除 LocalStore 数据
function deleteLocalStorageItem(key) {
    localStorage.removeItem(key);
}

// 设置 LocalStore 数据
function setLocalStoreageItem(key, value) {
    localStorage.setItem(key, value);
}

// 3Des 加密 
function get3DESEncryption(str) {
    const KeyHex = CryptoJS.enc.Utf8.parse('E7wQ#@%wfXfdAnQMT%@77vMu')
    const encrypted = CryptoJS.TripleDES.encrypt(str, KeyHex, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse('3C@L4Xx!')
    })

    return encrypted.toString(/*CryptoJS.enc.Utf8*/);
}

// 3Des 解密
function get3DESDecrypt(str) {
    const KeyHex = CryptoJS.enc.Utf8.parse('E7wQ#@%wfXfdAnQMT%@77vMu')
    // const WordArray = CryptoJS.enc.Hex.parse(str)
    // const base64str = CryptoJS.enc.Base64.stringify(WordArray)
    const decrypted = CryptoJS.TripleDES.decrypt(str, KeyHex, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse('3C@L4Xx!')
    })

    return decrypted.toString(CryptoJS.enc.Utf8)
}


export default {
    getLocalStoreageItem,
    deleteLocalStorageItem,
    setLocalStoreageItem,
    get3DESEncryption,
    get3DESDecrypt,
};
