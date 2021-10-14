const ratioWidth = 16;
const ratioHeight = 9;
var iframeElement = document.querySelector('iframe');
var windowWidth;
var windowHeight;

function windowResize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    var correctRatioHeight = (windowWidth * ratioHeight) / ratioWidth;
    var correctRatioWidth = (windowHeight * ratioWidth) / ratioHeight;

    if (correctRatioHeight < windowHeight) {
        iframeElement.style.cssText = `width: ${correctRatioWidth}px; height: ${windowHeight}px`;
    } else {
        iframeElement.style.cssText = `width: ${windowWidth}px; height: ${correctRatioHeight}px`;
    };
};

windowResize();
window.addEventListener('resize', windowResize);
