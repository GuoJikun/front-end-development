判断目标元素是否进入视线--利用 intersectionObserver api

<div class="box">
    <div style="height: 1000px;"></div>
    <div class="target"></div>
    <div style="height: 1000px;"></div>
</div>
<p>目标元素是否进入视线：<span style="color: red;" id="tar">否</span></p>

```html
<div class="box">
    <div style="height: 1000px;"></div>
    <div class="target"></div>
    <div style="height: 1000px;"></div>
</div>
<p>目标元素是否进入视线：<span style="color: red;" id="tar">是/否</span></p>
```

```js
scrollTest(){
    const options = {
        root: document.querySelector('.box'),
        rootMargin: '00px',
        threshold: 1,
    }

    const observer = new IntersectionObserver(this.handler, options)

    const target = document.querySelector('.target');
    observer.observe(target);
},
handler (entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            this.text = '是'
        }else{
            this.text = '否'
        }
        // 每个成员都是一个IntersectionObserverEntry对象。
        // 举例来说，如果同时有两个被观察的对象的可见性发生变化，entries数组就会有两个成员。
        // entry.boundingClientRect //目标元素的位置信息
        // entry.intersectionRatio //目标元素的可见比例
        // entry.intersectionRect //交叉部分的位置信息
        // entry.isIntersecting
        // entry.rootBounds //根元素的位置
        // entry.target
        // entry.time //时间戳
    });
}
```

<script>
function scrollTest(){
    const options = {
        root: document.querySelector('.box'),
        rootMargin: '00px',
        threshold: 1,
    }
    const observer = new IntersectionObserver(this.handler, options)
    const target = document.querySelector('.target');
    observer.observe(target);
}
function handler (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.isIntersecting){
            document.querySelector('#tar').innerText = '是'
        }else{
            document.querySelector('#tar').innerText = '否'
        }
    // 每个成员都是一个IntersectionObserverEntry对象。
    // 举例来说，如果同时有两个被观察的对象的可见性发生变化，entries数组就会有两个成员。
    // entry.boundingClientRect //目标元素的位置信息
    // entry.intersectionRatio //目标元素的可见比例
    // entry.intersectionRect //交叉部分的位置信息
    // entry.isIntersecting
    // entry.rootBounds //根元素的位置
    // entry.target
    // entry.time //时间戳
    });
}
scrollTest()
</script>

<style>
.box{
    height: 50vh;
    background-color: gray;
    overflow: scroll;
}
.target{
    background-color: blue;
    height: 200px;
}
</style>
