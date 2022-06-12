var cat = 0;
var dog = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({ Audio: 2 });
    sound = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Qhv2zdi-_/model.json", modelLoaded);
}
function modelLoaded() {
    console.log("model loaded");
    sound.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        r = Math.floor(Math.random() * 225) + 1;
        g = Math.floor(Math.random() * 225) + 1;
        b = Math.floor(Math.random() * 225) + 1;
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById("confidence").innerHTML = (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("name").style.color = "rgb(" + r + "," + g + "," + b + ")";
        r = Math.floor(Math.random() * 225) + 1;
        g = Math.floor(Math.random() * 225) + 1;
        b = Math.floor(Math.random() * 225) + 1;
        document.getElementById("confidence").style.color = "rgb(" + r + "," + g + "," + b + ")";
        image = document.getElementById("ear");
        r = Math.floor(Math.random() * 225) + 1;
        g = Math.floor(Math.random() * 225) + 1;
        b = Math.floor(Math.random() * 225) + 1;
        if (results[0].label == "dog")
        {
            image.src = "dog.png";
            document.getElementById("sound").innerHTML = "Barking";
            document.getElementById("sound").style.color = "rgb(" + r + "," + g + "," + b + ")";
        }
        else if (results[0].label == "cat")
        {
            image.src = "cat.webp";
            document.getElementById("sound").innerHTML = "Meow";
            document.getElementById("sound").style.color = "rgb(" + r + "," + g + "," + b + ")";
        }
        else if (results[0].label == "Background Noise")
        {
            image.src = "ear.png";
            document.getElementById("sound").innerHTML = "none";
            document.getElementById("sound").style.color = "rgb(" + r + "," + g + "," + b + ")";
        }
    }

} 
