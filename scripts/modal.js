const openModal = document.querySelector("button");
const modal = document.querySelector(".modal--wrapper");
const closeModal = document.querySelector("button.closeModal");

const isAtEndOfPage = () => {
	const scrollPosition = window.scrollY;
	return scrollPosition >= 5082;
};

window.addEventListener("scroll", function verifyScroll() {
	if (isAtEndOfPage()) {
		modal.style.display = "flex";
		this.window.removeEventListener("scroll", verifyScroll);
	}
});

modal.addEventListener("click", (event) => {
	const classNameOfClicked = event.target.classList[0];

	if (classNameOfClicked === "modal--wrapper") {
		modal.style.display = "none";
	}
});

closeModal.onclick = () => {
	modal.style.display = "none";
};
