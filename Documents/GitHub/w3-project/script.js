// SITE INTRO
const messageWrapper = document.createElement("div");
messageWrapper.setAttribute("id", "message-wrapper");
document.body.appendChild(messageWrapper);
document.getElementById("message-wrapper").style.backgroundColor = "rgb(14,14,14)";
document.getElementById("message-wrapper").style.background = "linear-gradient(0deg, rgba(14,14,14,1) 0%, rgba(14,14,33,1) 30%, rgba(16,20,153,1) 100%)";

const introMessage = document.createElement("h1");
introMessage.setAttribute("id", "intro-message");
document.getElementById("message-wrapper").appendChild(introMessage);
document.getElementById("intro-message").innerHTML = "First time here ";
document.getElementById("intro-message").style.color = "white";

document.getElementById("message-wrapper").innerHTML += `
<div id="btns-box">
<button id="yes-btn">Y</button>
<button id="no-btn">N</button>
</div>
`;
document.getElementById("btns-box").style.display = "none";

function intro() {
	const messageWrapper = document.getElementById("message-wrapper");
	const qMark = document.createElement("div");
	qMark.setAttribute("id", "q-mark");
	qMark.innerHTML = "?";
	let i = 0;
	setInterval(() => {
		if(i % 2 !== 0){
			messageWrapper.removeChild(qMark);
		} else if (i % 2 === 0){
			messageWrapper.appendChild(qMark);
		}
		i++;
	}, 700);
};

window.onload = intro();

setTimeout(() => {document.getElementById("btns-box").style.display = "inline-flex"}, 4000);

document.getElementById("yes-btn").addEventListener("click", () => {
	document.body.removeChild(messageWrapper);
	login();
});

document.getElementById("no-btn").addEventListener("click", () => {
	document.body.removeChild(messageWrapper);
	signUp();
});

let users = [];

const login = () => {
	document.body.innerHTML = `
	<div class="login-signup-container">
	<div class="login-signup-box">
		<h3 class="title">LOGIN</h3>
			<div>
				<input id="login-user-email-input" type="text" placeholder="Username or Email" name="" value="">
			</div>

			<div>
				<input id="login-password-input" type="text" placeholder="Password" name="" value="">
			</div>
			<button class="show-pass">show</button>

			<button id="login-btn">LET ME IN</button>
		</div>
	</div>
	`

	//take these inputs and filter through users array to find a match
	//if match, load next part.
	//if no match, display error
	// document.getElementById("signup-btn").addEventListener("click", () => {
	// 	let newUser = {
	// 		email: document.getElementById("login-email-input").value,
	// 		name: document.getElementById("login-name-input").value,
	// 		password: document.getElementById("login-password-input").value,
	// 	};
	// 	document.body.removeChild(document.getElementsByClassName("login-signup-container"));
	// });
};

const signUp = () => {
	document.body.innerHTML =`
	<div class="login-signup-container">
	<div class="login-signup-box">
		<h3 class="title">SIGN UP</h3>
			<div>
				<input id="signup-email-input" type="text" placeholder="Email" name="" value="">
			</div>

			<div>
				<input id="signup-name-input" type="text" placeholder="Username" name="" value="">
			</div>

			<div>
				<input id="signup-password-input" type="text" placeholder="Password" name="" value="">
			</div>
			<button class="show-pass">show</button>

			<button id="signup-btn">LET ME IN</button>
		</div>
	</div>
	`

	document.getElementById("signup-btn").addEventListener("click", () => {
		let newUser = {
			email: document.getElementById("signup-email-input").value,
			name: document.getElementById("signup-name-input").value,
			password: document.getElementById("signup-password-input").value,
		};
		users.push(newUser);
		newUser.id = (users.indexOf(newUser) + 1);
		//document.body.innerHTML = "";
		home();
	});
};

function home() {
    window.location.href = "./home/home.html";
}

console.log(users);
