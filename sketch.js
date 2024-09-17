let mobilenet;
let messi;

function modelReady() {
    console.log('Model is READY');
    // Use the classify method instead of predict
    mobilenet.classify(messi, gotResults);
}

function gotResults(results, error) {
    if(error){
        console.log(error);
    } else{
        console.log(results);
        let classLabel = results[0].label;
        let confidence = (results[0].confidence);
        console.log("Class Name :\t"+classLabel);
        console.log("Confidence :\t"+confidence);

        // Display the results in HTML
        createP("Predicted Class :\t"+classLabel);
        createP("Confidence Score :\t"+round(confidence*100)+"%");
    }
}

function imageReady() {
    image(messi, 0, 0, width, height);
}

function setup(imagePath) {
    createCanvas(640, 640);
    messi = createImg('Images/Man.jpg', imageReady);
    messi.hide();
    background(0);

    // Load the MobileNet model using ml5's imageClassifier
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}
