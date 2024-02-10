import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

const reactelement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //this is a react element formed by react
  reactelement
)
