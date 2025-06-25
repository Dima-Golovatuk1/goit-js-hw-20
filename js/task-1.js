const imgGallery = document.getElementsByClassName("gallery__item__image");
const imgGalleryLength = imgGallery.length;
const autoScrollToggle = document.getElementById("autoScrollToggle");

class Counter {
    constructor(value, maxValue, minValue) {
        this.value = value;
        this.maxValue = maxValue - 1;
        this.minValue = minValue;
    }

    increment(){
        this.value ++ ;
        if(this.value === this.maxValue + 1){
            this.value = 0;
        }
        console.log(this.value);
    }

    decrement(){
        this.value -- ;
        if(this.value === this.minValue - 1){
            this.value = this.maxValue;
        }
        console.log(this.value);
    }
}


class ScrollImg extends Counter {
    hardCod(crement){
        imgGallery[this.value].classList.remove("full-image");
        imgGallery[this.value].classList.add("full-image-container");

        if (crement === "increment"){
            this.increment();
        } else if (crement === "decrement"){
            this.decrement();
        }

        imgGallery[this.value].classList.remove("full-image-container");
        imgGallery[this.value].classList.add("full-image");
    }


    startAutoScroll() {
        this.intervalImg = setInterval(() => {
            this.hardCod("increment");
        }, 3000);
    }


    stopAutoScroll(){
        clearInterval(this.intervalImg);
    }


    onNextImg(event) {
        console.log(event.code);
        const clickButton = event.code;
        if (clickButton === "ArrowRight" || clickButton === "KeyD") {
            imgCounter.hardCod("increment");
        }
        if (clickButton === "ArrowLeft" || clickButton === "KeyA") {
            imgCounter.hardCod("decrement");
        }
    }
}


const imgCounter = new ScrollImg(0, imgGalleryLength, 0);


function onSwitchimgBtn() {
    console.log(autoScrollToggle.checked);
    if (autoScrollToggle.checked) {
        imgCounter.startAutoScroll();
    } else {
        imgCounter.stopAutoScroll();
    }
}    




window.addEventListener("keydown", imgCounter.onNextImg);
autoScrollToggle.addEventListener("change", onSwitchimgBtn)