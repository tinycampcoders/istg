const openModal = document.querySelector("button"),
	modal = document.querySelector(".modal--wrapper"),
	closeModal = document.querySelector("button.closeModal"),
	isAtEndOfPage = () => {
		let e = window.scrollY;
		return e >= 5082;
	};
window.addEventListener("scroll", function e() {
	isAtEndOfPage() &&
		((modal.style.display = "flex"),
		this.window.removeEventListener("scroll", e));
}),
	modal.addEventListener("click", (e) => {
		let l = e.target.classList[0];
		"modal--wrapper" === l && (modal.style.display = "none");
	}),
	(closeModal.onclick = () => {
		modal.style.display = "none";
	});
