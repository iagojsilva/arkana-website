document.addEventListener("DOMContentLoaded", ()=> {
	const now = new Date()
	const year = now.getFullYear()
	const copyrightText = `Copyright © ${year} Arkana Contabilidade  – Todos os direitos reservados.`

  const copyrightElement = document.querySelector(".copyright")!
	copyrightElement.innerHTML = copyrightText

	const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]


	const dayElement = document.querySelector("." + days[now.getDay()])
	dayElement?.classList.add("active")
})
