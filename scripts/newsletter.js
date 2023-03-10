const form = document.querySelector("#join-newsletter");

const validateEmail = (email) => {
	const expression =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
	return expression.test(email);
};

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const email = document.getElementById("email").value;
	let emailIsValid = validateEmail(email);

	if (emailIsValid) {
		Register(email);
		modal.style.display = "none";
	} else {
		console.log("Email errado");
	}
});

const Register = (email) => {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email }),
	};

	Service(options);
};

const Service = (options) => {
	fetch("http://localhost:3030/sendemail", options)
		.then((res) => res.json())
		.then((data) => {
			if (data.response) {
				console.log("Email Enviado");
			}
		});
};
