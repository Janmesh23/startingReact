function customRender(reactElement,mainc){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHtml = re
}


const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        target : '_blank'
    },
    children: 'click me to visit google'
}

const mainc = document.querySelector('#root')

customRender(reactElement,mainc)