const code__container = document.getElementById("code__container");
const codeElement = document.querySelectorAll(".code");

code__container.addEventListener("input", (e) => {
    if (e.target.dataset.index) {
        if (e.target.value !== "") {
            if(e.target.nextElementSibling){
                e.target.nextElementSibling.focus();
            }
        
        }

    }
})


code__container.addEventListener("keyup", (e) => {
    if (e.target.dataset.index) {
        if (e.key === "Delete" || e.key === "Backspace") {
            e.target.value = "";
            if(e.target.previousElementSibling){
                e.target.previousElementSibling.focus();
            }
            
        }
    }
})





