var config = {
    apiKey: "AIzaSyDYwKOmkeG6KwjdjcfRs0XggXFn6OUry_A",
    authDomain: "group-work-8d0ea.firebaseapp.com",
    databaseURL: "https://group-work-8d0ea.firebaseio.com",
    projectId: "group-work-8d0ea",
    storageBucket: "group-work-8d0ea.appspot.com",
    messagingSenderId: "373852816158"
};
firebase.initializeApp(config);
$(document).ready(function() {
    $('#login').click(function() {
        var email1 = $("#email").val();
        var password1 = $("#password").val();
        firebase.auth().signInWithEmailAndPassword(email1, password1).then(function(res) {
            console.log(res)
            window.location.replace("../last-added.html");
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    });
});