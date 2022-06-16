nose_x=0;
nose_y=0
left_wrist_x=0;
right_wrist_x=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,450);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("lightblue");
    document.getElementById("square_sides").innerHTML="Side of Square will be "+difference+" px";
    fill('darkblue');
    stroke('lightpink');
    square(nose_x,nose_y,difference);
}

function modelLoaded(){
    console.log('Done Done Done!!');
}

function gotPoses(results){
    if(results.length>0)
{
     console.log(results);
     nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("nose_x="+nose_x);
    console.log("nose_y="+nose_y);
    left_wrist_x=results[0].pose.leftWrist.x;
    right_wrist_x=results[0].pose.rightWrist.x;
    difference=floor(left_wrist_x-right_wrist_x);
    console.log(left_wrist_x+right_wrist_x+"their difference is "+difference);
}
}