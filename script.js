document.addEventListener("DOMContentLoaded", () => {
    const faqBoxes = document.querySelectorAll(".faqbox");

    faqBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            const answer = box.nextElementSibling;
            
            faqBoxes.forEach((otherBox) => {
                if (otherBox !== box) {
                    otherBox.classList.remove("active");
                    otherBox.nextElementSibling.style.maxHeight = null;
                    otherBox.nextElementSibling.style.padding = "0 24px";
                }
            });

            box.classList.toggle("active");

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.padding = "0 24px";
            } else {
                answer.style.maxHeight = answer.scrollHeight + 48 + "px";
                answer.style.padding = "24px";
            }
        });
    });
});