const button = document.getElementById('btn'); //acces catre button

const body = document.body; //accesam body

const colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];    //masivul de culori

button.addEventListener('click', changeBackground) //adaugam event listner

function changeBackground() {
    const colorsIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorsIndex]
}

// const changeBackground = () => {
//     const colorsIndex = Math.floor(Math.random() * colors.length);
//     body.style.backgroundColor = colors[colorsIndex]
// };

button.addEventListener('click', changeBackground)

