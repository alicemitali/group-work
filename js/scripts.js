var config = {
    apiKey: "AIzaSyDYwKOmkeG6KwjdjcfRs0XggXFn6OUry_A",
    authDomain: "group-work-8d0ea.firebaseapp.com",
    databaseURL: "https://group-work-8d0ea.firebaseio.com",
    projectId: "group-work-8d0ea",
    storageBucket: "group-work-8d0ea.appspot.com",
    messagingSenderId: "373852816158"
};
firebase.initializeApp(config);
//getting values
$(document).ready(function() {
    $('#next0').click(function() {
        var email1 = $("#email").val();
        var password1 = $("#password").val();
        // var auth = {
        //     email: email1,
        //     password: password1,
        // }
        firebase.auth().createUserWithEmailAndPassword(email1, password1).then(function(res) {
            console.log(res)
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
        $('#tab0').hide()
        $('#tab1').show()
    })
    $('#next1').click(function() {
        $('#tab1').hide()
        $('#tab2').show()
    })
    $('#next2').click(function() {
        $('#tab2').hide()
        $('#tab3').show()
    })
    $('#next3').click(function() {
        $('#tab3').hide()
        $('#tab4').show()
    })
    $('#next4').click(function() {
        $('#tab4').hide()
        $('#tab5').show()
    })
    $('#submit').click(function() {
            // $("form").submit(function(event) {

            var name1 = $("input#name").val();

            var age1 = $("input#age").val();


            var gender1 = $("#gender").val();



            var look1 = $("#look").val();


            var country1 = $("#country").val();



            var city1 = $("input#city").val();



            var magali1 = $("textarea#magali").val();



            var alice1 = $("textarea#alice").val();


            var height1 = $("input#height").val();


            var weight1 = $("input#weight").val();


            var interest1 = $("input#interest").val();


            var ideal1 = $("input#ideal").val();



            var languages1 = $("input#languages").val();



            var salary1 = $("#salary").val();

            var color1 = $("#color").val();


            var looking1 = $("#looking").val();

            var smoking1 = $("#smoking").val();

            var data = {
                Name: name1,
                Age: age1,
                Gender: gender1,
                Look: look1,
                // Status: status1,
                Country: country1,
                City: city1,
                Magali: magali1,
                Alice: alice1,
                Height: height1,
                Weight: weight1,
                Interest: interest1,
                Ideal: ideal1,
                Languages: languages1,
                Salary: salary1,
                Color: color1,
                Looking: looking1,
                Smoking: smoking1,
            }
            try {
                firebase.database().ref().child('\Informations').push(data)
                alert("User Inserted")
            } catch (err) {
                console.log(err)
            }

            // firebase.database().ref().child('\Informations').push(data)


            // var value = e.options[e.selectedIndex].value;
            // var text = e.options[e.selectedIndex].text;

            console.log(data)
            '</h2>'
            // event.preventDefault()
        })
        // var childData;
        // var leadsRef = firebase.database().ref('Informations');
        // leadsRef.on('value', function(snapshot) {
        //     snapshot.forEach(function(childSnapshot) {
        //         childData = childSnapshot.val();
        //         // $("#age").text(childData.Age);
        //         console.log(childData.Age)
        //     });
        // });
        // $(".age1").text(age1);
        // $(".country1").text(country1);
        // $(".city1").text(city1);
        // $(".magali1").text(magali1);
        // $(".alice1").text(alice1);
        // $(".height1").text(height1);
        // $(".weight1").text(weight1);
        // $(".interest1").text(interest1);
        // $(".ideal1").text(ideal1);
        // $(".languages").text(languages1);
        // $(".salary1").text(salary1);
        // $(".color1").text(color1);
        // $(".looking1").text(looking1);
        // $(".smoking1").text(smoking1);
})