import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor(els, thresholdPercent) {
        //this.itemsToReveal = document.querySelectorAll(".feature-item")
        this.thresholdPercent = thresholdPercent
        this.itemsToReveal =  els
        this.browserHeight = window.innerHeight
        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle )
        window.addEventListener("resize", debounce(() => {
            console.log("Resize just ran")
            this.browserHeight = window.innerHeight
        }, 333))
    }

    calcCaller() {
        console.log("Scroll function ran")
        this.itemsToReveal.forEach(el => {
            if(el.isRevealed == false) {
                this.calculateIfScrolledTo(el)
            }
        })
    }

    calculateIfScrolledTo(el) {
        //if (window.scrollY + window.innerHeight > el.offsetTop) {
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            console.log("element was calculated")
            /* console.log(el.getBoundingClientRect().y) */
            //let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100 //This only works in Chrome and Firefox but not Edge as Edge does not have the y property
            //let scrollPercent = (el.getBoundingClientRect().top / window.innerHeight) * 100
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
            if (scrollPercent < this.thresholdPercent) {
                el.classList.add("reveal-item--is-visible")
                el.isRevealed = true
                if(el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle)
                }
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item")
            el.isRevealed = false
        })
        this.itemsToReveal[this.itemsToReveal.length -1].isLastItem = true
    }
}

export default RevealOnScroll;