function navigate(id) {
  var section = document.getElementsByClassName("section");
  for (var i = 0; i < section.length; i++) {
    section[i].style.display = 'none';
  }
  var page = document.getElementById(id);
  if(page.style.display == "none") {
    page.style.display="block";
  } else {
    page.style.display="none";
  }
};
