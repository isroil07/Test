let kitchens = document.querySelectorAll(".kitchen-design")
let modals_wrap = document.querySelector(".modals_wrap")
let closes = document.querySelector(".closes")
for(let i=0; i<kitchens.length;i++) {
    kitchens[i].onclick = () =>{
        modals_wrap.style.display = "flex"
        modals_wrap.style.transition = "0.5s"
    }
}
closes.onclick = () => {
    modals_wrap.style.display = "none"
}
