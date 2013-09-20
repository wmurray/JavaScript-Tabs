function navigate(id) {
  var section = document.getElementById(id);
  if(section.style.display == "none") {
    section.style.display="block";
  } else {
    section.style.display="none";
  }
}