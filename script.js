function toggleMode() {
    const html = document.documentElement

//    if(html.classList.contains('light')) {
//        html.classList.remove("light")
//    } else {
//        html.classList.add("light")
//    }

    /* jeito simples */
    html.classList.toggle('light')

}