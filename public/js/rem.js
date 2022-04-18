function remSize() {
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    document.querySelector('body').style.fontSize=0.3+'rem'
    // 设计稿为750px，设置一半宽度则为375px。1rem==100px的设计稿宽度，则表达一半宽度为3.75rem

}
remSize()
window.onresize=function(){
    remSize()
}