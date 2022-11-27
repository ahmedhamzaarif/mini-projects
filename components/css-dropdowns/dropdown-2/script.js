const toggleSubMenu = menu => {
    if (menu) {
        const subMenus = document.getElementsByClassName("sub-menu")
        for (let s of subMenus){
            s.classList.remove("open")
        }
        const subMenu = document.getElementById(menu)
        subMenu.classList.add("open")
    }
    const mainMenu = document.getElementById("menu-inner")
    mainMenu.classList.toggle("open")
}
const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdown")
    dropdown.classList.toggle("open")
}