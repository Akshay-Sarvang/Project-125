function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('lightgrey');
    textSize(difference);
    fill('aqua');
    text(Akshay, 50, 400);
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}