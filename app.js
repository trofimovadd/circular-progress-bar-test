function updateProgress() {
    const progressInput = document.getElementById("progressInput");
    const circularProgress = document.getElementById("circularProgress");
    const value = parseInt(progressInput.value, 10)

    if (value > 100 || value.length === 0) {
        circularProgress.style.background = `conic-gradient(#005bff 0deg, #ededed 0deg)`
    } else {
        circularProgress.style.background = `conic-gradient(#005bff ${value * 3.6}deg, #ededed 0deg)`;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const hide = document.getElementById("hide");
    const block = document.getElementById("circularProgress");

    hide.addEventListener('click', function handleClick() {
        if (hide.checked) {
            block.style.display = "none";
        } else {
            block.style.display = "flex";
        }
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const animate = document.getElementById("animate");
    const block = document.getElementById("circularProgress");

    animate.addEventListener('click', function handleClick() {
        if (animate.checked) {
            block.style.animation = "spin 2s linear infinite";
        } else {
            block.style.animation = "spin 0s linear infinite";
        }
    })
})