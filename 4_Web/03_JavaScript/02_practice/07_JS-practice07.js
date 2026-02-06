function bgColor(color) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            document.body.style.backgroundColor = color;
            resolve();
        }, 1000);
    });
}

bgColor("red")
    .then(() => bgColor("orange"))
    .then(() => bgColor("yellow"))
    .then(() => bgColor("green"))
    .then(() => bgColor("blue"))
    .then(() => bgColor("navy"))
    .then(() => bgColor("purple"))