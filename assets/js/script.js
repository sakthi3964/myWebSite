// window.onscroll = function () { myFunction() };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

function sendMessage() {
  var name, email, subject, message;
  var validation;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  subject = document.getElementById("subject").value;
  message = document.getElementById("message").value;
  if (name == "" || email == "" || subject == "" || message == "") {
    var x = document.getElementById("snackbar3");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    return false;
  }
  if (!validateEmail(email)) {
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    return false;
  }
  var request = $.ajax({
    async: true,
    crossDomain: true,
    url: "mail_to/send_message.php",
    type: "POST",
    data: { name: name, email: email, subject: subject, message: message },
    cache: false,
  });
  request.done(function (msg) {
    if (msg == 'success') {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      clearform();
    }
    else {
      var x = document.getElementById("snackbar1");
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }

  });
}
function clearform() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}