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

            $('#contacts').append("<h2 class='name1'>" + childData.Name + '</h2>' + "<h2 class= 'age1'>" + childData.Age + '</h2>' + "<h2 class='gender1'>" + childData.Gender + '</h2>' + "<h2 class='look1'>" + childData.look + '</h2>' + "<h2 class='status1'>" + childData.Status + '</h2>' + "<h2 class='country1'>" + childData.Country + '</h2>' + "<h2 class='city1'>" + childData.City + '</h2>' + "<h2 class='magali1'>" + childData.Magali + '</h2>' + "<h2 class='alice1'>" + childData.Alice + '</h2>' + "<h2 class='height1'>" + childData.Height + '</h2>' + "<h2 class='salary1'>" + childData.Salary + '</h2>' + "<h2 class='weight1'>" + childData.Weight + '</h2>' + "<h2 class= 'interest1'>" + childData.Interest + '</h2 > ' + "<h2 class='ideal1'>" + childData.Ideal + '</h2 > ' + "<h2 class='languages1'>" + childData.Languages + '</h2 > ' + "<h2 class='color1'>" + childData.Color + '</h2 > ' + "<h2 class='looking1'>" + childData.Looking + '</h2 > ' + "<h2 class='smoking1'>" + childData.Smoking + '</h2 > ');
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