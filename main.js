function setup(){
    canvas = createCanvas(550,500);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.size(550, 500);
    machine = ml5.poseNet(camera, modalLoaded);
    machine.on("pose", gotPoses);
}
function modalLoaded(){
    console.log("modal loaded")
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
    }
}