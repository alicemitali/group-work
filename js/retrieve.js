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

            $('#contacts').append("<h2 class='name1'>" + childData.Name + '</h2>' + "<h2 class= 'age1'>" + childData.Age + '</h2>' + "<h2 class='gender1'>" + childData.Gender + '</h2>' + "<h2 class='look1'>" + childData.look + '</h2>' + "<h2 class='status1'>" + childData.Status + '</h2>' + "<h2 class='country1'>" + childData.Country + '</h2>' + "<h2 class='city1'>" + childData.City + '</h2>' + "<h2 class='magali1'>" + childData.Magali + '</h2>' + "<h2 class='alice1'>" + childData.Alice + '</h2>' + "<h2 class='height1'>" + childData.Height + '</h2>' + "<h2 class='salary1'>" + childData.Salary + '</h2>' + "<h2 class='weight1'>" + childData.Weight + '</h2>' + "<h2 class= 'interest1'>" + childData.Interest + '</h2 > ' + "<h2 class='ideal1'>" + childData.Ideal + '</h2 > ' + "<h2 class='languages1'>" + childData.Languages + '</h2 > ' + "<h2 class='color1'>" + childData.Color + '</h2 > ' + "<h2 class='looking1'> Looking: " + childData.Looking + '</h2 > ' + "<h2 class='smoking1'>" + childData.Smoking + '</h2 > ');

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