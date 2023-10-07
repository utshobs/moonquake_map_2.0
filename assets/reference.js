// first Person view modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("viewbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal2 = document.getElementById("myModal2");
// Start Learning Modal
document.getElementById("startLearn").addEventListener("click", function () {
  //alert("Button clicked!");
  modal2.style.display = "block";
});

var span2 = document.getElementById("close2");

span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
