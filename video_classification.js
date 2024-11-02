let classifier;
let video;
let label = "Predicting...";
let conf = "Calculating...";
let isVideoPlaying = false;

function preload() {
    classifier = ml5.imageClassifier('MobileNet');
}

function gotResult(results) {
    console.log(results);
    label = results[0].label;
    conf = nf(results[0].confidence * 100, 0, 2);  // Format confidence to 2 decimal points
    console.log(label+" : "+conf);
}

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    
    // Initialize as paused
    video.pause();

    // Start classifying if video is playing
    if (isVideoPlaying) {
        classifier.classifyStart(video, gotResult);
    }
    else {
        console.log("Video is not playing");
    }
}

function draw() {
    background(220);
    if (isVideoPlaying) {
        image(video, 0, 0, width, height);
    }

    // Display the prediction label and confidence
    fill(0);
    rectMode(CENTER);
    rect(width / 2, height - 50, width, 50);
    textSize(20);
    fill(255);
    textAlign(CENTER, CENTER);
    noStroke();
    text("Predicted: "+label, width / 2, height - 60);
    textSize(18);
    fill(255);
    textAlign(CENTER, CENTER);
    noStroke();
    text("Confidence: "+conf, width / 2, height - 40);
}

function startVideo() {
    video.play();
    isVideoPlaying = true;
    classifier.classifyStart(video, gotResult);  // Start classification
}

function pauseVideo() {
    video.stop();
    isVideoPlaying = false;
}
