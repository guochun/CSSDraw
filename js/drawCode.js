var drawCode = `
.preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fee433;
   
}

.wrapper {
    height: 165px;
    width: 100%;
    position: relative;
}

.nose {
    border: 12px solid transparent;
    border-radius: 50%;
    border-top-color: black;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
}

.eye {
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background: #2e2e2e;
    position: absolute;
    border: 2px solid black;

}

.eye.left {
    right: 50%;
    margin-right: 90px;
}

.eye.right {
    left: 50%;
    margin-left: 90px;
}

.eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 6px;
    top:-2px;
    border: 2px solid #000;

}

.face {
    width: 68px;
    height: 68px;
    border: 2px solid black;
    background: #FC0D1C;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}

.face.left {
    right: 50%;
    margin-right: 116px;
}
.face.right {
    left: 50%;
    margin-left: 116px;
}

.upperlip {
    width:  80px;
    height: 20px;
    border: 2px solid black;
    border-top: none;
    position: absolute;
    top: 60px;
    background: #fee433;
    z-index: 1;
}

.upperlip.left {
    border-bottom-left-radius: 40px 20px;
    border-right: none;
    right: 50%;
    transform: rotate(-15deg)
}

.upperlip.right {
    left: 50%;
    border-left: none;
    border-bottom-right-radius: 40px 20px;
    transform: rotate(15deg)
}

.lowerwrapper {
    height: 135px;
    width: 200px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -40px;
    overflow: hidden;
}

.lowerlip {
    width: 200px;
    height: 2500px;
    background-color: #990513;
    border-radius: 150px/800px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    
}

.lowerlip::after {
    content: '';
    display: block; 
    width: 100px;
    height: 120px;
    background-color: #FC0D1C;
    position: absolute;
    bottom: 0px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%); 
}


`