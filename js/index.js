let registration = document.querySelector("#registration");
let authorization = document.querySelector("#authorization");
document.querySelector(".inner_form2").hidden = true;
authorization.onclick = function() {
  if (!authorization.classList.contains("active")) {
    authorization.classList.add("active");
    document.querySelector(".inner_form2").hidden = true;
    registration.classList.remove("active");
    document.querySelector(".inner_form1").hidden = false;
  }
};
registration.onclick = function() {
  if (!registration.classList.contains("active")) {
    registration.classList.add("active");
    document.querySelector(".inner_form1").hidden = true;
    document.querySelector(".inner_form2").hidden = false;
    authorization.classList.remove("active");
  }
};

// let elements = document.querySelectorAll(".btt");
// for (let i = 0; i < elements.length; i++) {
//   elements[i].onclick = function() {
//     elements[i].classList.toggle("active");
//     document.querySelector(".parag").hidden = true;
//   };

// elements.onclick = function() {
//   for (let elem of elements) {
//     if (elem.classList.contains("active")) {
//       elem.classList.remove("class");
//     } else {
//       elem.classList.add / remove("class");
//     }
//   }
// };
// elem.onclick = function() {
//   if (array[0].classList.contains("active")) {
//     array[0].classList.remove("active");
//   } else {
//     array[0].classList.add("active");
//   }
// };
