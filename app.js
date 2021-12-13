const bs_btn = document.getElementById("bs_btn");

bs_btn.addEventListener("click", bs_layer)

function bs_layer() {
    document.getElementById("button_container").classList.add("hide")
    document.getElementById("bs_layer").classList.remove("hide")
}