function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/meuavatar2.png")
  } else {
    img.setAttribute("src", "./assets/meuAvatar2.0.png")
  }
}
