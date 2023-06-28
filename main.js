var images = [
    "images/page1-2.jpg",
    "images/page3-4.jpg",
    "images/page5-6.jpg",
    "images/page7-8.jpg",
    "images/page9-10.jpg",
    "images/page11-12.jpg",
    "images/page13-14.jpg",
    "images/page15-16.jpg",
    "images/page17-18.jpg",
    "images/page19-20.jpg",
    "images/page21-22.jpg",
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