const Button = document.getElementById('Button');
const userName = document.getElementById('userName');

Button.addEventListener('click', function(){
    const name = userName.value.trim();

    if (name === ""){
        alert("Enter Your name");
        return;
    }

    window.location.href = "results.html?name=" + encodeURIComponent(name);
});