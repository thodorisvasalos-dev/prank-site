const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');


const greetElement = document.getElementById('greeting');
const mediaElement = document.getElementById('media');
const backButton = document.getElementById('backButton');

if(name === "Στέλιος"){
    greetElement.innerText = "Στέλιο, έχω μια απορία:";

  
        mediaElement.innerHTML = '<img src = "assets/whyareyougay.JPG">'

}else if(name === "Μαρία"){
    greetElement.innerText = "Δυστυχώς, η αλήθεια δεν κρύβεται...";


        mediaElement.innerHTML = '<img src = "assets/adopted.JPG">'

}
else if (name === "Μαίρη"){
    greetElement.innerText = "Βρήκα μια σπάνια φωτογραφία σου.";

  
        mediaElement.innerHTML = '<img src = "assets/clown.JPG">'

}
else{
    mediaElement.innerHTML = '<img src = "assets/waitaminute.JPG">'
}

//Activate the back Button to go back to start
backButton.addEventListener('click', function(){
    window.location.href = "index.html";
});