const bs_btn = document.getElementById("bs_btn");

bs_btn.addEventListener("click", bs_layer)

function bs_layer() {
    document.getElementById("button_container").classList.add("hide")
    document.getElementById("zobi_quotes").classList.add("hide")
    document.getElementById("bs_layer").classList.remove("hide")
    
    document.getElementById("algozobi_logo").classList.remove("down_nm")
    document.getElementById("algozobi_logo").classList.add("up_nm")
    
}

