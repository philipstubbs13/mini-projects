const topHalf = document.getElementById('top-half');

topHalf.addEventListener('touchstart', e => {
    if (e.targetTouches.length >= 2) {
        console.log('More than 2 fingers');
    }

    e.preventDefault()
    console.log('Touches', e.touches.length);
    console.log('Targets', e.targetTouches.length);
    console.log('Changed', e.changedTouches.length);
})

document.addEventListener('click', e => {
    console.log('Clicked');
})

document.addEventListener("touchstart", e => {
    console.log('Start');
    [...e.changedTouches].forEach(touch => {
        const dot = document.createElement('div')
        dot.classList.add('dot')
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`
        dot.id = touch.identifier
        document.body.append(dot)
    })
})

document.addEventListener("touchmove", e => {
    console.log('Move');
    [...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier)
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`
    })
})

document.addEventListener("touchend", e => {
    console.log('End');
    [...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier)
        dot.remove()
    })
})

document.addEventListener('touchcancel', e => {
    console.log('End');
    [...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier)
        dot.remove()
    })
})