//add name
var add = document.getElementById("add");
var fl1 = [];
var fl2 = [];
var fl3 = [];
var fl4 = [];

add.onclick = function () {
  var name = document.getElementById("name").value;
  var teamx = document.getElementById("Team");
  var t = teamx.value;

  var li = document.createElement("li");
  li.setAttribute("class", "drag");
  li.setAttribute("draggable", "true");
  li.setAttribute("ondragstart", "drag(event)");
  var nameval = document.createTextNode(name);
  li.appendChild(nameval);

  //identifier

  if (name == "" || name == null) {
    alert("Name must be filled out");
  } else if (name.length >= 20 || name.length < 3) {
    alert("Min 3 and Max 20 Characters");
  } else if (t == "1") {
    document.getElementById("ul1").appendChild(li);
  } else if (t == "2") {
    document.getElementById("ul2").appendChild(li);

  } else if (t == "3") {
    document.getElementById("ul3").appendChild(li);
  } else {
    document.getElementById("ul4").appendChild(li);
  }

  document.getElementById("name").value = "";

  //count 1

  let cd1 = () => {
    var ulitem1 = document.getElementById("ul1");
    var liNodes1 = [];
    for (var i = 0; i < ulitem1.childNodes.length; i++) {
      if (ulitem1.childNodes[i].nodeName == "LI") {
        liNodes1.push(ulitem1.childNodes[i]);
      }
    }
    var count1 = liNodes1.length;
    document.getElementById("c1").innerHTML = count1;
    document.getElementById("fc1").innerHTML = "Total Team 1 Players are" + " " + count1;
    fl1 = ulitem1.innerText;
    document.getElementById("ful1").innerHTML = fl1;
  }
  cd1();

  //count 2

  let cd2 = () => {
    var ulitem2 = document.getElementById("ul2");
    var liNodes2 = [];
    var listr2 = liNodes2.toString();
    for (var i = 0; i < ulitem2.childNodes.length; i++) {
      if (ulitem2.childNodes[i].nodeName == "LI") {
        liNodes2.push(ulitem2.childNodes[i].value);
      }
    }
    var count2 = liNodes2.length;
    document.getElementById("c2").innerHTML = count2;
    document.getElementById("fc2").innerHTML = "Total Team 2 Players are" + " " + count2;
    fl2 = ulitem2.innerText;
    document.getElementById("ful2").innerHTML = fl2;
  }
  cd2();

  //count 3

  let cd3 = () => {
    var ulitem3 = document.getElementById("ul3");
    var liNodes3 = [];
    for (var i = 0; i < ulitem3.childNodes.length; i++) {
      if (ulitem3.childNodes[i].nodeName == "LI") {
        liNodes3.push(ulitem3.childNodes[i]);
      }
    }
    var count3 = liNodes3.length;
    document.getElementById("c3").innerHTML = count3;
    document.getElementById("fc3").innerHTML = "Total Team 3 Players are" + " " + count3;
    fl3 = ulitem3.innerText;
    document.getElementById("ful3").innerHTML = fl3;
  }
  cd3();

  //count 4

  let cd4 = () => {
    var ulitem4 = document.getElementById("ul4");
    var liNodes4 = [];
    for (var i = 0; i < ulitem4.childNodes.length; i++) {
      if (ulitem4.childNodes[i].nodeName == "LI") {
        liNodes4.push(ulitem4.childNodes[i]);
      }
    }
    var count4 = liNodes4.length;
    document.getElementById("c4").innerHTML = count4;
    document.getElementById("fc4").innerHTML = "Total Team 4 Players are" + " " + count4;
    fl4 = ulitem4.innerText;
    document.getElementById("ful4").innerHTML = fl4;
  }
  cd4();

  // drag and drop

  var li1 = document.querySelectorAll(".drag");
  var allchoice = document.querySelectorAll(".choice");
  var draggableTodo = null;

  li1.forEach((drag) => {
    drag.addEventListener("dragstart", dragStart);
    drag.addEventListener("dragend", dragEnd);
  });

  function dragStart(e) {
    draggableTodo = this;
    e.target.classList.add('hide');
    setTimeout(() => {
      // this.style.display = "none";
    }, 0);

  }

  function dragEnd() {
    draggableTodo = null;
    setTimeout(() => {
      this.style.display = "block";
    }, 0);

  }

  allchoice.forEach((choice) => {
    choice.addEventListener("dragover", dragOver);
    choice.addEventListener("dragenter", dragEnter);
    choice.addEventListener("dragleave", dragLeave);
    choice.addEventListener("drop", dragDrop);
  });

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter() {
    this.style.border = "none";
  }

  function dragLeave() {
    this.style.border = "none";
  }

  function dragDrop() {
    this.style.border = "none";
    this.appendChild(draggableTodo);
    cd1();
    cd2();
    cd3();
    cd4();
  }
}

//submit 

submit.onclick = function () {
  alert("No Update After Submission");
  document.querySelector(".aftsub").style.display = "block";
  document.querySelector(".op").style.pointerEvents = "none";
  document.querySelector(".inp").style.pointerEvents = "none";
}