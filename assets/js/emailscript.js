const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

let pName = id("pname"),
email = id("email"),

errorMsg = classes("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(pName, 0, "What is your name Ranger?");
    engine(email, 1, "Do you not have an Email?");
});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid #A01306";
    }

    else {
        errorMsg[serial].innerHTML = "";
        // id.style.border = "2px solid green";
        alert('Thanks for your feedback!');
    }
}
$(function(){
    $('#form').on('submit', function(e){
      e.preventDefault();
      $.post('https://formspree.io/f/mvodyjrr', 
         $('#form').serialize(), 
         function(data, status, xhr){
           // do something here with response;
         });
         $('#submit').click(function() {
            $('#modal-contact').modal('hide');
         });
    });
});

$('#modal-contact').on('hidden.bs.modal', function () {
    $('#form').find("input[type=text], textarea").val("");
});

