const toggleBtn = document.querySelectorAll("#sixth__toggle");
const hideContent = document.querySelectorAll("#sixth__hide");
const upMouse = document.querySelectorAll(".container__sixth__body__content__title__down");
const downMouse = document.querySelectorAll(".container__sixth__body__content__title__up");

toggleBtn.forEach((event, index) => {
    event.addEventListener('click', () => {
        if (hideContent[index].classList.contains("show")) {
            upMouse[index].style.display = "block";
            downMouse[index].style.display = "none";
            hideContent[index].classList.remove("show");
        }
        else {
            upMouse[index].style.display = "none";
            downMouse[index].style.display = "block";
            hideContent[index].classList.add("show");
        }
    })
})

const imgAlert = document.querySelectorAll("#img_alert");

imgAlert.forEach((img) => {
    img.addEventListener("click", () => {
        alert("준비중입니다.");
    })
})