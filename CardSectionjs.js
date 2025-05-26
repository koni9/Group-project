const buttons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("cardModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Filter logic
buttons.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".filter-buttons button.active").classList.remove("active");
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        cards.forEach(card => {
            if (category === "all" || card.classList.contains(category)) {
                card.classList.remove("hidden");
                setTimeout(() => {
                    card.style.display = "block";
                }, 10); // minimal delay to allow CSS transition
            } else {
                card.classList.add("hidden");
                setTimeout(() => {
                    card.style.display = "none";
                }, 300); // match transition duration
            }
        });
    });
});

// Card click logic
cards.forEach(card => {
    card.addEventListener("click", () => {
        const img = card.querySelector("img");
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Close modal
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Close when clicking outside image
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
