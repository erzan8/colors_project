const effect1 = new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity:0.2,
    image1: './images/colors.jpg',
    image2:'./images/flowers.jpg',
    displacementImage: './images/heightMap.png',
    imagesRatio: 0.7
});

const effect2 = new hoverEffect({
    parent: document.querySelector('.distortion2'),
    intensity:0.1,
    image1: './images/neon1.jpg',
    image2:'./images/neon2.jpg',
    displacementImage: './images/stripe1.png',
    imagesRatio: 0.7
});
const effect3 = new hoverEffect({
    parent: document.querySelector('.distortion3'),
    intensity:0.1,
    image1: './images/rocks1.jpg',
    image2:'./images/rocks2.jpg',
    displacementImage: './images/mosaic.png',
    imagesRatio: 0.7
});

const effect4 = new hoverEffect({
    parent: document.querySelector('.distortion4'),
    intensity:0.1,
    image1: './images/green.jpg',
    image2:'./images/green2.jpg',
    displacementImage: './images/losanges.png',
    imagesRatio: 0.7
});