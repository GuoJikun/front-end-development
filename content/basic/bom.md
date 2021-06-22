## 获取 url 中的参数

```js
function query(url) {
    return url.match(/([^?=&]+)(=([^&]*))/g).reduce((obj, v) => {
        const tmp = v.split("=");
        obj[tmp[0]] = tmp[1];
        return obj;
    }, {});
}
```

## 颜色 HEX 转 RGB

```js
function hex2rgb(val) {
    const hexArr = val.match(/([a-zA-Z\d]{2})/g);
    let target = [];
    for (let i of tmp) {
        target.push(parseInt(`0x${i}`, 16));
    }
    return target.join();
}
```

## 获取 unix 时间戳

```js
function getUnixTimestamp() {
    return parseInt(new Date().getTime() / 1000);
}
```
