let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});



menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

function validateForm() {
    let fname = document.forms["myForm"]["Name"].value;
    let mail = document.forms["myForm"]["email"].value;
    let desc = document.forms["myForm"]["decs"].value;

    if (fname == "") {
      alert("Name must be filled out");
      return false;
    }
    else if (mail == "")
    {
        alert("Email must be filled out");
        return false;
    }
    else if(desc == "")
    {
        alert("Description must be filled out");
        return false;
    }
  }




