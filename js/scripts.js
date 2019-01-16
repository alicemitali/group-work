//getting values
$(document).ready(function() {
    $('#next').click(function() {
        var name1 = $("input#name").val();
        // $(".name1").text(name1);

        var age1 = $("input#age").val();
        // $(".age1").text(age1);
        // if (age1 > 18) {

        //     alert(you are not allowed to use this website);
        // }

        var gender1 = $("#gender").val();
        var look1 = $("#look").val();

        var status1 = $("#status").val();


        // 
        var country1 = $("#country").val();
        // $(".country1").text(country1);


        var city1 = $("input#city").val();
        // $(".city1").text(city1);


        var magali1 = $("textarea#magali").val();
        // $(".magali1").text(magali1);


        var alice1 = $("textarea#alice").val();
        // $(".alice1").text(alice1);

        var height1 = $("input#height").val();
        // $(".height1").text(height1);

        var weight1 = $("input#weight").val();
        // $(".weight1").text(weight1);

        var interest1 = $("input#interest").val();
        // $(".interest1").text(interest1);

        var ideal1 = $("input#ideal").val();
        // $(".ideal1").text(ideal1);


        var languages1 = $("input#languages").val();
        // $(".languages").text(languages1);


        var salary1 = $("#salary").val();
        var color1 = $("#color").val();
        var looking1 = $("#looking").val();
        var smoking1 = $("#smoking").val();






        // var value = e.options[e.selectedIndex].value;
        // var text = e.options[e.selectedIndex].text;

        console.log(name1)
        console.log(age1)
        console.log(country1)
        console.log(gender1)
        console.log(status1)
        console.log(look1)
        console.log(city1)
        console.log(salary1)
        console.log(magali1)
        console.log(alice1)
        console.log(weight1)
        console.log(height1)
        console.log(color1)
        console.log(interest1)
        console.log(ideal1)
        console.log(looking1)
        console.log(smoking1)
        console.log(languages1)







    })

})

function getting() {




    //second
    var selectedText = $("#formsel option:selected").text()
    console.log(value)
    $('.form .stages label').click(function() {
        var radioButtons = $('.form input:radio');
        var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));
        selectedIndex = selectedIndex + 1;
    });

    $('.form button').click(function() {
        var radioButtons = $('.form input:radio');
        var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));

        selectedIndex = selectedIndex + 2;

        $('.form input[type="radio"]:nth-of-type(' + selectedIndex + ')').prop('checked', true);

        if (selectedIndex == 6) {
            $('button').html('Submit');
        }
    });

}