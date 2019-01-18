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
    var leadsRef = firebase.database().ref('Informations');
    leadsRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            // $(".age1").append(childData.Age);
            // $(".name1").append(childData.Name);
            // document.getElementById('age').innerHTML = 'gtcu'
            // console.log(childData.Age)

            $('#contacts').append("<tr><td class='contact'>" + childData.firstName + '</td>' + "<td class='contact'>" + childData.lastName + '</td>' + "<td class='contact'>" + childData.gender + "<td class='contact'>" + childData.birthday + "<td class='contact'>" + childData.motherName + "<td class='contact'>" + childData.fatherName + "<td class='contact'>" + childData.acceptancy + "<td class='contact'>" + childData.disability + "<td class='contact'>" + childData.district + "<td class='contact'>" + childData.sector + "<td class='contact'>" + childData.cell + '</td></tr>');


        });

    });
    // $("#age").show();
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