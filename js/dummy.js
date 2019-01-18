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
            Status: status1,
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

        // firebase.database().ref().child('\Informations').push(data)


        // var value = e.options[e.selectedIndex].value;
        // var text = e.options[e.selectedIndex].text;

        console.log(data)
            // event.preventDefault()
            // console.log(gender1)
            // console.log(look1)
            // console.log(age1)
            // console.log(status1)
            // console.log(city1)
            // console.log(country1)
            // console.log(magali1)
            // console.log(alice1)
            // console.log(height1)
            // console.log(salary1)
            // console.log(weight1)
            // console.log(color1)
            // console.log(interest1)
            // console.log(ideal1)
            // console.log(looking1)
            // console.log(smoking1)
            // console.log(languages1)
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
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == x.length - 1) {
        document.getElementById("submit").style.display = 'block';
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n);
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:

        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x,
        y,
        i,
        valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i,
        x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}


// var password = document.getElementById("password"),
//     confirm_password = document.getElementById("confirm_password");

// function validatePassword() {
//     if (password.value != confirm_password.value) {
//         confirm_password.setCustomValidity("Passwords Don't Match");
//     } else {
//         confirm_password.setCustomValidity('');
//     }
// }

// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;