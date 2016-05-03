var React = require('react')
var render = require('react-dom').render
var App = require('./components/App.jsx')
var domready = require('domready')

domready(function () {
  console.log("in index.js", typeof App)
  render((
    <App />
  ), document.querySelector('#app'))
})
