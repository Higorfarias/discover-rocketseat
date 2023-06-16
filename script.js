function toggleMode() {
    const html = document.documentElement
    /* jeito simples */
    html.classList.toggle("light")
//    if(html.classList.contains('light')) {
//        html.classList.remove("light")
//    } else {
//        html.classList.add("light")
//    }

    // Alterar a img ao clicar no botão
const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        //Se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/me-light.jfif")
    } else {
        // Se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatarme.jfif")
    }

}