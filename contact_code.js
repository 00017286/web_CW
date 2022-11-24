function refresh(){
    window.location.reload();
}

function validate() {
    let a = document.forms["myform"]["name"].value;
    let b = document.forms["myform"]["lastname"].value;
    let c = document.forms["myform"]["email"].value;
    let d = document.forms["myform"]["number"].value;
    let e = document.forms["myform"]["country"].value;
    let f = document.forms["myform"]["yes"];
    console.log(a, b, c, d, e)
    if (a=="" || b=="" || c=="" || d=="" || e=="") {
        alert("You didn't enter all the required information.");
        return false;
    }
    else if(!(/\w[a-zA-Z]+/.test(myform.name.value)) || !(/\w[a-zA-Z]+/.test(myform.lastname.value))) {
        alert("Please, provide valid name and surname.");
        return false;
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email.value))) {
        alert("Please, provide valid email address.");
        return false;
    }
    else if(!(/^\d+$/.test(myform.number.value))) {
        alert("Please, provide valid phone number (digits only).");
        return false;
    }
    else if(!f.checked) {
        alert("Please, agree to our policy to send a form.");
        return false;
    }
    else {
        refresh();
    }
  }

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
})

var image = document.createElement("img");
image.src = "./images/travel.jpg";
var src = document.getElementById("picture");
src.appendChild(image);
image.height = 250;
image.width = 350;

