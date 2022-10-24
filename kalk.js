
function proiz() 
{
      const check = /^\d*\.?\d+$/;
    let a1 = document.getElementsByName("num");
      if (check.test(a1[0].value) == false || a1[0].value == 0) 
      {
        alert("Вводите внимательней!");    
    }
      else
      {
        a1[0]=Number.parseInt(a1[0]);
        a1.innerHTML="Ответ: "+c;
      }
}
window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("Mbutton");
    b.addEventListener("click", proiz);
  });