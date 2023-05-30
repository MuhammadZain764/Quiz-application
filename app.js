  
 var startButton = document.querySelector(".startButton")
 var quizWrapper = document.querySelector(".quizWrapper")
 
 function formHandler() {
     var formWrapper = document.querySelector(".formWrapper")
     var inputFields = formWrapper.querySelectorAll("input")
 
     



     for (var input of inputFields) {
         console.log("input", input.value)
         if (!input.value) {
             alert("Enter required fields")
             return
         }
     }
 


     formWrapper.style.display = "none"
     startButton.style.display = "flex"
 }
 
 
 function quizStart() {
     startButton.style.display = "none"
     quizWrapper.style.display = "block"
 
 }
 function goBack(){
    backButton.style.display = "none"
    startButton.style.display = "none"
    formWrapper.style.display = "block"


 }
