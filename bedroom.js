let img;
let status;
function preload() {
    img = loadImage("bedroom.jpg");
}
function setup() {
    canvas = createCanvas(650, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function draw() {
    image(img, 0, 0, 650, 500);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
    if (status == true) {
        document.getElementById("status").innerHTML = "Status: Object Detected";
    }
}
