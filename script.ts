document.addEventListener("DOMContentLoaded", ()=> {
	const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

	const now = new Date()

	const dayElement = document.querySelector("." + days[now.getDay()])
	dayElement?.classList.add("active")
})
