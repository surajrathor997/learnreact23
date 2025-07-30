function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.herf)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props:{
        herf: 'http://google.com',
        target: '_blank'
    },
    children:'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)