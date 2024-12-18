
const formElements = document.querySelectorAll(".formElem");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const submitBtn = document.querySelector("#submit-button");

let allAnswered = false;

submitBtn.addEventListener("click", () => {
  for (formElem of formElements) {
      if (formElem.value === "" || formElem.value === "none") {
        allAnswered = false;
        break
      } else {
        allAnswered = true;
      }
    }

    if (/kenedy/i.test(fname.value) && /olan/i.test(lname.value) ) {
      alert("안녕하세요")
    } 


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/ig.test(email.value) && email.value !== "") {
      alert("Please put a valid email")
      return
    } 

    if (allAnswered) {
      submitBtn.textContent = "Request Successfully Sent";
      submitBtn.disabled = true;
      submitBtn.style.pointerEvents = "none";
    } else {
      alert("Please answer all parts of the form")
    }

  })

document.body.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    for (formElem of formElements) {
      if (formElem.value === "" || formElem.value === "none") {
        allAnswered = false;
        break
      } else {
        allAnswered = true;
      }
    }

    if (/kenedy/i.test(fname.value) && /olan/i.test(lname.value) ) {
      alert("안녕하세요")
    } 

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/ig.test(email.value) && email.value !== "") {
      alert("Please put a valid email")
      return
    } 

    if (allAnswered) {
      submitBtn.textContent = "Request Successfully Sent";
      submitBtn.disabled = true;
      submitBtn.style.pointerEvents = "none";
    } else {
      alert("Please answer all parts of the form")
    }

  }
})

function openNav() {
    document.getElementById("sidebar").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("sidebar").style.width = "0%";
} 
