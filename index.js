const myDarkMode = document.getElementById('myDarkMode')
const contentDiv = document.getElementById('content')

myDarkMode.addEventListener('click', () => {
    contentDiv.classList.toggle('dark-mode')
    contentDiv.classList.toggle('wight-mode')
})