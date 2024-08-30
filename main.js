let btns = document.querySelectorAll("button");
let accumulator = 0
let current = ""
let operation = ""

btns.forEach(btn => {
	btn.addEventListener("click", function() {
		if (current.length === 0 && (this.textContent === "=" || this.textContent === "+" || this.textContent === "-" || this.textContent === "/" || this.textContent === "*")) {
			console.log("No current value to do operations on");
		} else if (this.textContent === "0" && current.length === 0) {
			console.log("cant start with zero")
		} else if (!isNaN(this.textContent)) {
			current = current + this.textContent;
			console.log(current);
		} else if (this.textContent === "AC") {
			current = "";
			accumulator = 0;
			console.log("accumulator and current cleared")
		} 

		// NEXT: need to check if operation is filled then perform it before doing another operation of if equals is pressed
		
		// else if (this.textContent === "+") {
		// 	accumulator += Number(current);
		// 	console.log(accumulator);
		// 	current = ""
		// 	// keep current value on screen, but return current to be an empty string
		// 	operation = this.textContent
		// } else if (this.textContent === "-") {
		// 	accumulator -= Number(current);
		// 	console.log(accumulator);
		// 	current = ""
		// 	// keep current value on screen, but return current to be an empty string
		// 	operation = this.textContent
		// } else if (this.textContent === "*") {
		// 	if (accumulator === 0) accumulator += 1;
		// 	accumulator *= Number(current);
		// 	console.log(accumulator);
		// 	current = ""
		// 	// keep current value on screen, but return current to be an empty string
		// 	operation = this.textContent
		// } else if (this.textContent === "/") {
		// 	accumulator /= Number(current);
		// 	console.log(accumulator);
		// 	current = ""
		// 	// keep current value on screen, but return current to be an empty string
		// 	operation = this.textContent
		// }
	})
})
