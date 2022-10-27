// cuando le hagamos click al menu se va a mostrar
const menu = document.querySelector(".menu")
const items = document.querySelector(".items")

menu.addEventListener("click", ()=>{
    items.classList.toggle("active")
})


const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text')

const body = document.querySelector("body")


load()

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    store(body.classList.contains('dark'));


    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent='Light Mode'
    }else{
        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent='Dark Mode'
    }
})




function store(value){
    localStorage.setItem('dark-mode', value);
}


function load(){
    const darkmode = localStorage.getItem('dark-mode');

    if(!darkmode){
        store('false');
    }else if(darkmode == 'true'){
        body.classList.toggle('dark');
        toggleIcon.src='assets/icons/sun.svg'
        toggleText.textContent='Light Mode'

        toggleIcon.src='assets/icons/moon.svg'
        toggleText.textContent='Dark Mode'
        
    }

}
