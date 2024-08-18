function toggleAnimation(activeElementId, inactiveElementId, activeAnimationClass, inactiveAnimationClass) {
    const activeElement = document.getElementById(activeElementId);
    const inactiveElement = document.getElementById(inactiveElementId);

    if (activeElement.classList.contains(activeAnimationClass) || inactiveElement.classList.contains(inactiveAnimationClass)) {
        return;
    }
    
    activeElement.classList.remove(inactiveAnimationClass);
    inactiveElement.classList.remove(activeAnimationClass);

    activeElement.classList.add(activeAnimationClass);

    setTimeout(() => {
        activeElement.style.display = "none";
        inactiveElement.style.display = "block";
        inactiveElement.classList.add(inactiveAnimationClass);
    }, 1500); 
}

function img1(){
    toggleAnimation("animate_img2", "animate_img1", "rotateCircleImg", "backRotateCircleImg")
}

function img2(){
    toggleAnimation( "animate_img1", "animate_img2", "rotateCircleImg", "backRotateCircleImg");
}



window.onload(
    upAndDown()
);

function upAndDown(){
    const starbucks_s = document.getElementById("starbucks-s");
    const starbucks_t = document.getElementById("starbucks-t");
    const starbucks_a = document.getElementById("starbucks-a");
    const starbucks_r = document.getElementById("starbucks-r");
    const starbucks_b = document.getElementById("starbucks-b");
    const starbucks_u = document.getElementById("starbucks-u");
    const starbucks_c = document.getElementById("starbucks-c");
    const starbucks_k = document.getElementById("starbucks-k");
    const starbucks_ss = document.getElementById("starbucks-ss");
    
    arr = [starbucks_s, starbucks_t, starbucks_a, starbucks_r, starbucks_b, starbucks_u, starbucks_c, starbucks_k, starbucks_ss];

    for (let i = 0; i < arr.length; i++) {
        setTimeout(function() {
            arr[i].classList.add("animate-moveUpAndDown");
        }, i * 400);  // Atraso de 1 segundo entre cada adição de classe
    }
        
}