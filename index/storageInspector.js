if (localStorage.getItem('themeSwitchFlag')) {
    if (JSON.parse(localStorage.getItem('themeSwitchFlag')) == false) {
        document.documentElement.style.setProperty('--background-color', '#fefaff')
        document.documentElement.style.setProperty('--general-font', '#2e314d')
        console.log('light theme')
    } else {
        document.documentElement.style.setProperty('--background-color', '#232123')
        document.documentElement.style.setProperty('--general-font', '#fdfdff')
        console.log('dark theme')
    }
}
if (localStorage.getItem('--font-color')) {
    document.documentElement.style.setProperty('--font-color', localStorage.getItem('--font-color'))
}
if (localStorage.getItem('--general-font')) {
    document.documentElement.style.setProperty('--general-font', localStorage.getItem('--general-font'))
}
if (localStorage.getItem('--background-color')) {
    document.documentElement.style.setProperty('--background-color', localStorage.getItem('--background-color'))
}
if (localStorage.getItem('--background-lighten-color')) {
    document.documentElement.style.setProperty('--background-lighten-color', localStorage.getItem('--background-lighten-color'))
}
if (localStorage.getItem('themeSwitchFlag')) {
    themeSwitchFlag = JSON.parse(localStorage.getItem('themeSwitchFlag'))
    if (themeSwitchFlag) {
        document.documentElement.style.setProperty('--background-color', '#161516')
        document.documentElement.style.setProperty('--background-lighten-color', '#232123')
        console.log('dark-theme')
    } else {
        document.documentElement.style.setProperty('--background-color', '#f4f4fe')
        document.documentElement.style.setProperty('--background-lighten-color', '#fefaff')
        console.log('light-theme')
    }
}