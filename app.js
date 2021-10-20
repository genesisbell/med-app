if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js')
    .then(registration => {
        console.log("SW Registered!\n", registration);
    }).catch( error => {
        console.log("SW Registration failed\n", error);
    })
} else {

}