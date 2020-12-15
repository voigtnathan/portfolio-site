require('bootstrap/dist/js/bootstrap')
require('bootstrap/dist/css/bootstrap.css')


//creates an application route history

exports.onRouteUpdate = () => {
    window.locations = window.locations || [document.referrer]
    locations.push(window.location.href)
    window.previousPath = locations[locations.length - 2]
  }