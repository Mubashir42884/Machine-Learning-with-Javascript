let mobilenet;
let messi;

function modelReady() {
    console.log('Model Is READY');
    // Use the classify method instead of predict
    mobilenet.classify(messi, gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    } else{
        console.log(results);
    }
}

function imageReady() {
    image(messi, 0, 0, width, height);
}

function setup(imagePath) {
    createCanvas(640, 640);
    messi = createImg('Images/man.jpg', imageReady);
    messi.hide();
    background(0);

    // Load the MobileNet model using ml5's imageClassifier
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}
