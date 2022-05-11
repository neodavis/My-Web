let options = {LINK_SELECTOR: 'a',debugMode: true,};
const swup = new Swup({
    options,
    plugins: [new SwupSlideTheme()]
})
window.onload = function() {
    let themeSwitchFlag = true;
    let colorArray = document.querySelectorAll('.color-button')
    let colorSwitch = document.querySelector('.color-switch')
    let colorSwitchFlag = false;
    let linkArray = document.querySelectorAll('.navigation-item');
    let navIcons = document.querySelectorAll('.material-icons')
    let themeSwitch = document.querySelector('.theme-switch')
    let rotate = 0;
    let transitionArray = []
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
    }
    if (localStorage.getItem('theme-switch-img')) {
        document.querySelector('.theme-switch-img').src = localStorage.getItem('theme-switch-img')
    }
    Array.from(document.querySelectorAll('main')).forEach((e)=>{
            e.style.transition = 'none'
    })
    Array.from(document.querySelectorAll('h1')).forEach((e)=>{
        e.style.transition = 'none'
    })
    Array.from(document.querySelectorAll('p')).forEach((e)=>{
        e.style.transition = 'none'
    })
    Array.from(document.querySelectorAll('nav')).forEach((e)=>{
        e.style.transition = 'none'
    })
    Array.from(document.querySelectorAll('li')).forEach((e)=>{
        e.style.transition = 'none'
    })
    Array.from(document.querySelectorAll('span')).forEach((e)=>{
        e.style.transition = 'none'
    })
    Array.from(document.querySelectorAll('a')).forEach((e)=>{
        e.style.transition = 'none'
    })
    Array.from(document.querySelectorAll('ul')).forEach((e)=>{
        e.style.transition = 'none'
    })
    Array.from(document.querySelectorAll('button')).forEach((e)=>{
        e.style.transition = 'none'
    })
    setTimeout(()=>{
        Array.from(document.querySelectorAll('main')).forEach((e)=>{
            e.style.transition = '0.3s ease'
        })
        Array.from(document.querySelectorAll('h1')).forEach((e)=>{
            e.style.transition = '0.3s ease'
        })
        Array.from(document.querySelectorAll('p')).forEach((e)=>{
            e.style.transition = '0.3s ease'
        })
        Array.from(document.querySelectorAll('nav')).forEach((e)=>{
            e.style.transition = '0.3s ease'
        })
        Array.from(document.querySelectorAll('li')).forEach((e)=>{
            e.style.transition = '0.1s ease'
        })
        Array.from(document.querySelectorAll('span')).forEach((e)=>{
            e.style.transition = '0.3s ease'
        })
        Array.from(document.querySelectorAll('a')).forEach((e)=>{
            e.style.transition = '0.3s ease'
        })
        Array.from(document.querySelectorAll('ul')).forEach((e)=>{
            e.style.transition = '0.3s ease'
        })
        Array.from(document.querySelectorAll('button')).forEach((e)=>{
            e.style.transition = '0.3s ease'
        })
    }, 300)
    linkArray.forEach((e)=>{
        linkArray.forEach((k)=>{
            k.classList.remove('active')
        })
        navIcons.forEach((k)=>{
            k.classList.remove('active')
        })
                switch(document.location.href.split('/').splice(-1)[0]) {
                    case 'index.html':
                        navIcons[0].classList.add('active')                
                        linkArray[0].classList.add('active')
                        break
                    case 'about.html':    
                        navIcons[1].classList.add('active')     
                        linkArray[1].classList.add('active')
                        break
                    case 'portfolio.html':
                        navIcons[3].classList.add('active')     
                        linkArray[3].classList.add('active')
                        let redirectArr = Array.from(document.querySelectorAll('.link-redirect'))
                        redirectArr.forEach((e)=>{
                            e.onclick = function() {
                                window.location.href = e.dataset.redirect
                            }
                        })
                        break
                    case 'experience.html':
                        navIcons[2].classList.add('active')     
                        linkArray[2].classList.add('active')
                        break
                    case 'contact.html':
                        navIcons[4].classList.add('active')     
                        linkArray[4].classList.add('active')
                        break
                }})
    
    linkArray.forEach((e)=>{
        e.onclick = function() {
            linkArray.forEach((k)=>{
                k.classList.remove('active')
            })
            navIcons.forEach((k)=>{
                k.classList.remove('active')
            })
            setTimeout(() => {
                switch(document.location.href.split('/').splice(-1)[0]) {
                    case 'index.html':
                        navIcons[0].classList.add('active')                  
                        linkArray[0].classList.add('active')
                        break
                    case 'about.html':
                        navIcons[1].classList.add('active')          
                        linkArray[1].classList.add('active')
                        break
                    case 'portfolio.html':
                        navIcons[3].classList.add('active')  
                        linkArray[3].classList.add('active')
                        let redirectArr = Array.from(document.querySelectorAll('.link-redirect'))
                        redirectArr.forEach((e)=>{
                            e.onclick = function() {
                                window.location.href = e.dataset.redirect
                            }
                        })
                        break
                    case 'experience.html':
                        navIcons[2].classList.add('active')  
                        linkArray[2].classList.add('active')
                        break
                    case 'contact.html':
                        navIcons[4].classList.add('active')  
                        linkArray[4].classList.add('active')
                        break
                }
            }, 100);
        }
    })
    themeSwitch.addEventListener('click', function() {
        if (rotate == 720) {
            rotate = 0
        } else {
            rotate = 720
        }
        if (themeSwitchFlag != false) {
            document.querySelector('.theme-switch-img').style.transform = `rotate(${rotate}deg)`
            document.querySelector('.theme-switch-img').src = "../index/assets/moon.png"
            localStorage.setItem('theme-switch-img', "../index/assets/moon.png")
            document.documentElement.style.setProperty('--background-lighten-color', getComputedStyle(document.documentElement).getPropertyValue('--light-bc-lighten'))
            document.documentElement.style.setProperty('--background-color', getComputedStyle(document.documentElement).getPropertyValue('--light-bc'))
            localStorage.setItem('--background-lighten-color', getComputedStyle(document.documentElement).getPropertyValue('--light-bc-lighten'))
            localStorage.setItem('--background-color', getComputedStyle(document.documentElement).getPropertyValue('--light-bc'))
            document.documentElement.style.setProperty('--general-font', '#2e314d')
            localStorage.setItem('--general-font', '#2e314d')
        } else {
            document.querySelector('.theme-switch-img').style.transform = `rotate(${rotate}deg)`
            document.querySelector('.theme-switch-img').src = "../index/assets/sun.png"
            localStorage.setItem('theme-switch-img', "../index/assets/sun.png")
            document.documentElement.style.setProperty('--background-lighten-color', getComputedStyle(document.documentElement).getPropertyValue('--dark-bc-lighten'))
            document.documentElement.style.setProperty('--background-color', getComputedStyle(document.documentElement).getPropertyValue('--dark-bc'))
            localStorage.setItem('--background-lighten-color', getComputedStyle(document.documentElement).getPropertyValue('--dark-bc-lighten'))
            localStorage.setItem('--background-color', getComputedStyle(document.documentElement).getPropertyValue('--dark-bc'))
            document.documentElement.style.setProperty('--general-font', '#fdfdff')
            localStorage.setItem('--general-font', '#fdfdff')
        }
        console.log(themeSwitchFlag)
        themeSwitchFlag = !themeSwitchFlag
        localStorage.setItem('themeSwitchFlag', themeSwitchFlag)
    }, false)

    colorSwitch.children[0].addEventListener('click', function() {
        if (colorSwitchFlag) {
            colorSwitch.style.right = "-195px"
            colorSwitchFlag = !colorSwitchFlag
        } else {
            colorSwitch.style.right = "-30px"
            colorSwitchFlag = !colorSwitchFlag
        }
    }, false)

    colorArray.forEach((e)=>{
        e.addEventListener('click', function() {
            document.documentElement.style.setProperty('--font-color', e.dataset.color)
            localStorage.setItem('--font-color', e.dataset.color)
        }, false)
    })}
