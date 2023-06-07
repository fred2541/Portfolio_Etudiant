var images = [
    "images/page3-4.jpg",
    "images/page3.jpg",
    "images/page4.jpg",
    "images/page5.jpg",
    "images/page6.jpg",
    "images/page7.jpg",
    "images/page8.jpg",
    "images/page9.jpg",
    "images/page10.jpg",
    "images/page11.jpg",
    "images/page12.jpg",
    "images/page13.jpg",
    "images/page14.jpg",
    "images/page15.jpg",
    "images/page16.jpg",
    "images/page17.jpg",
    "images/page18.jpg",
    "images/page19.jpg",
    "images/page20.jpg",
    "images/page21.jpg",
    "images/page22.jpg",
];
var currentImage = 0;

function changeImage(direction) {
    currentImage += direction;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    } else if (currentImage >= images.length) {
        currentImage = 0;
    }
    document.getElementById('portfolioImage').src = images[currentImage];
}