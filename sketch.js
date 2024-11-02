let classifier;
let img;
let label="Predicting...";
let conf="Calculating...";

function preload() {
    classifier = ml5.imageClassifier('MobileNet');
    img = loadImage('Images/Dog.jpg');
}

function gotResult(results) {
    console.log(results);
    label = results[0].label;
    conf = results[0].confidence;
    conf = (round(conf*100))
}

function setup() {
    createCanvas(640, 640);
    classifier.classify(img, gotResult, 10); // To show top 10 results
}

function draw() {
    background(220);
    image(img, 0, 0, width, height);

    if (conf >= 60) {
        rectMode(CENTER);
        fill(0, 255, 0, 80);
        rect(200, 600, 900, 60);
        textSize(26);
        fill(255);
        textAlign(CENTER, CENTER);
        text("Predicted Label: "+label, 300, 590);
        textSize(20);
        fill(255);
        textAlign(CENTER, CENTER);
        stroke(0);
        text("Confidence: "+conf+" %", 300, 615);
    }
    else {
        rectMode(CENTER);
        fill(255, 0, 0, 80);
        rect(200, 600, 900, 60);
        textSize(26);
        fill(255);
        textAlign(CENTER, CENTER);
        text("Predicted Label: "+label, 300, 590);
        textSize(20);
        fill(255);
        textAlign(CENTER, CENTER);
        stroke(0);
        text("Confidence: "+conf+" %", 300, 615);
    }
}