$(document).ready(function() {

    $("#create-userbtn").click(function () {
        if (
          $("#name").val() == "" ||
          $("#phonenumber").val() == "" ||
          $("#email").val() == "" ||
          $("#password").val() == ""
        ) {
          alert("Enter your details");
        }
        else {
          alert('Account created sucessfully')
        }
      });

    $($('#create-userbtn')).on('click', function (e) {
        e.preventDefault();
        let myForm = $('.userForm')[0];
        let myData = new FormData(myForm);

        $.ajax({
            type: "POST",
            url: "http://159.65.21.42:9000/register",
            processData: false,
            contentType: false,
            data: myData,
            success: function (resp) {
                alert("User Created");
                console.log(resp);
            },
            error: function (err) {
                // alert('User exists');
                console.log(err);
            },
        });
    });
});
