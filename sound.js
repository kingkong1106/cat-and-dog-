function start_classification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ot7fHu0V6/model.json',modelReady);

}
function modelReady() { classifier.classify(gotResults); }
function gotResults(error, results) { console.log('gotResult'); if(error) { console.error(error); }else{ console.log(results); random_number_r = Math.floor(Math.random() * 255) + 1; random_number_g = Math.floor(Math.random() * 255) + 1; random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result-label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'accuracy - ' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result-label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        img1 = document.getElementById('https://www.jamiesale-cartoonist.com/wp-content/uploads/dog-12.png');
        img2 = document.getElementById('https://www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-cat-free.png');
        img3 = document.getElementById(' https://w7.pngwing.com/pngs/73/397/png-transparent-human-ear-hearing-euclidean-sense-cartoon-ear-hearing-site-cartoon-character-people-happy-birthday-vector-images.png');
    if(results[0].label == "bark"){
        img1.src = '200.gif';
        img2.src = ' https://www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-cat-free.png';
        img3.src = 'https://w7.pngwing.com/pngs/73/397/png-transparent-human-ear-hearing-euclidean-sense-cartoon-ear-hearing-site-cartoon-character-people-happy-birthday-vector-images.png';
         ;
    }else if(results[0].label == "Bell tower"){
        img1.src = ' https://www.jamiesale-cartoonist.com/wp-content/uploads/dog-12.png';
        img2.src = 'cat-wiggle.gif';
        img3.src = 'https://w7.pngwing.com/pngs/73/397/png-transparent-human-ear-hearing-euclidean-sense-cartoon-ear-hearing-site-cartoon-character-people-happy-birthday-vector-images.png';
         
    }else if(results[0].label == "Harp"){
        img1.src = ' https://www.jamiesale-cartoonist.com/wp-content/uploads/dog-12.png';
        img2.src = 'https://www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-cat-free.png';
        img3.src = 'llkL.gif';
        
    

    


        }
}
