window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("my-button");
  b.addEventListener("click", proiz);
});
function proiz() {
  const check = /^\d*\.?\d+$/;
  let f1 = document.getElementsByName("e1");
  let f2 = document.getElementsByName("e2");
  if (check.test(f1[0].value) == false || check.test(f2[0].value) == false || f1[0].value == 0 || f2[0].value == 0) {
    alert("Ошибка ввода!");
  }
  else {
    let f3 = document.getElementById("answer");
    f1[0] = Number.parseInt(f1[0]);
    f2[0] = Number.parseInt(f2[0]);
    var a = f1[0].value * f2[0].value;
    f3.innerHTML = "Ответ: " + a;
  }
}
