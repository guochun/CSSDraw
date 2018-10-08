;(function() {
    var code = document.querySelector('#code')
    var styleTag = document.querySelector('#styleTag')
    var buttons = document.querySelectorAll('[data-speed]')
    var lastButton =document.querySelector('[data-speed=normal]')
    var speedData = {
        slow: 100,
        normal: 50,
        fast:10
    }
    var n = 0
    var timer = null;

    function writeCode(drawCode,speed) {
        timer = setInterval(function() {
            n+=1
            code.innerHTML = drawCode.substring(0,n)
            styleTag.innerHTML = drawCode.substring(0,n)
            code.scrollTop = code.scrollHeight;
            if(n >= drawCode.length) {
                clearInterval(timer)
            }
        },speed)
    }

    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e){
            var target = e.target
            if(target === lastButton) return;
            var speed = target.dataset.speed;
            lastButton.classList.remove('active')
            target.classList.add('active')
            clearInterval(timer)
            writeCode(drawCode, speedData[speed])
            lastButton = target;
        })
    }
    writeCode(drawCode, speedData['normal'])

    

})()