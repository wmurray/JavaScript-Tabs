function navigate(id) {
  var content = document.getElementsByClassName("tab-content");
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = 'none';
  }
  var page = document.getElementById(id);
  if(page.style.display == "none") {
    page.style.display="block";
  } else {
    page.style.display="none";
  }
};

var link1 = document.getElementById("tabone");
var link2 = document.getElementById("tabtwo");
var link3 = document.getElementById("tabthree");

link1.addEventListener("click", function() {
  navigate("welcome")
  }
);

link2.addEventListener("click", function() {
  navigate("test")
  }
);

link3.addEventListener("click", function() { 
  navigate("explanation")
  }
);