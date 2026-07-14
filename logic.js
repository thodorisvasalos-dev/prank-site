const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');


const greetElement = document.getElementById('greeting');
const mediaElement = document.getElementById('media');
const backButton = document.getElementById('backButton');

if(name === "Στέλιος"){
    greetElement.innerText = "Έχω μια απορία:";
    mediaElement.innerHTML = '<img src = "./assets/whyareyougay.jpg">'

}else if(name === "Μαρία"){
    greetElement.innerText = "Δυστυχώς, η αλήθεια δεν κρύβεται...";
    mediaElement.innerHTML = '<img src = "./assets/adopted.jpg">'

}
else if (name === "Μαίρη"){
    greetElement.innerText = "Βρήκα μια σπάνια φωτογραφία σου.";
    mediaElement.innerHTML = '<img src = "./assets/clown.jpg">'

}
else if (name === 'Ευθύμης'){
    greetElement.innerText = "Αν ήσουν καρτούν θα ήσουν:";
    mediaElement.innerHTML = '<img src = "./assets/squidward.jpg">'
}
else if(name === 'Θανάσης'){
    greetElement.innerText = "Πετώντας μαλακίες δεν γίνεσαι πιλότος!!";
}
else if(name === 'Νίκωνας'){
    greetElement.innerText = "Πούλα την λαδιέρα. Πάρε κάτι τέτοιο καλύτερα:";
    mediaElement.innerHTML = '<img src = "./assets/i30n.jpg" style = "transform: scale(0.6);">'
}
else{
    mediaElement.innerHTML = '<img src = "./assets/waitaminute.jpg">'
}

//Activate the back Button to go back to start
backButton.addEventListener('click', function(){
    window.location.href = "index.html";
});