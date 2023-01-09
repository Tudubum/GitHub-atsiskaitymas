// Gauti modalą
var myModal = document.getElementById("myModal");
var workModal = document.getElementById("workModal");
var aboutModal = document.getElementById("aboutModal");
var contactModal = document.getElementById("contactModal");

// Gauti mygtuką, kuris atidaro modalą
var myBtn = document.getElementById("myBtn");
var workBtn = document.getElementById("workBtn");
var aboutBtn = document.getElementById("aboutBtn");
var contactBtn = document.getElementById("contactBtn");

// Gauti elementą, kuris uždaro modalą (X mygtuką)
var mySpan = document.getElementsByClassName("mybtnClose")[0];

var workSpan = document.getElementsByClassName("workbtnClose")[0];

var aboutSpan = document.getElementsByClassName("aboutbtnClose")[0];

var contactSpan = document.getElementsByClassName("contactbtnClose")[0];

// Kai paspaudžiamas mygtukas, atidaromas modalas
myBtn.onclick = function() {
  myModal.style.display = "block";
}

workBtn.onclick = function() {
    workModal.style.display = "block";
  }

aboutBtn.onclick = function() {
    aboutModal.style.display = "block";
  }

contactBtn.onclick = function() {
    contactModal.style.display = "block";
  }

// Kai paspaudžiamas X mygtukas, uždaromas modalas
mySpan.onclick = function() {
  myModal.style.display = "none";
}

workSpan.onclick = function() {
    workModal.style.display = "none";
  }

aboutSpan.onclick = function() {
    aboutModal.style.display = "none";
  }

contactSpan.onclick = function() {
    contactModal.style.display = "none";
  }

// Kai paspaudžiamas bet kur kitur už modalo, modalas uždaromas

window.onclick = function(event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
    else if (event.target == workModal) {
      workModal.style.display = "none";
    }
    else if (event.target == aboutModal) {
      aboutModal.style.display = "none";
    }
    else if (event.target == contactModal) {
      contactModal.style.display = "none";
    }
  }

  
  