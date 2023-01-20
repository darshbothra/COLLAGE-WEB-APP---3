main.js
var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    },5000);

}
camera=document.getElementById("camera");
Webcam.set({
    height:250,
    width:360,
    image_format:'jpeg',
    jpeg_quality:90
});
    
function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
        document.getElementById("result").innerHTML='<img id="selfie1" src="'+data_uri+'">';
        }
        if(img_id=="selfie3"){
            document.getElementById("result").innerHTML='<img id="selfie2" src="'+data_uri+'">';
            }
            if(img_id=="selfie3"){
                document.getElementById("result").innerHTML='<img id="selfie3" src="'+data_uri+'">';
                }
    })
}
