$(document).ready(() => {
    $("#submit").click(() => {
        if (
            $("#name").val() === "" ||
            $("#photo").val() === "" ||
            $("#question1").select === "" ||
            $("#question2").val() === "" ||
            $("#question3").val() === "" ||
            $("#question4").val() === "" ||
            $("#question5").val() === "" ||
            $("#question6").val() === "" ||
            $("#question7").val() === "" ||
            $("#question8").val() === "" ||
            $("#question9").val() === "" ||
            $("#question10").val() === ""
        ) {
            alert("Please fill out the missing input");
        } else {
            let userData = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                scores: [
                    $("#q1").val(),
                    $("#q2").val(),
                    $("#q3").val(),
                    $("#q4").val(),
                    $("#q5").val(),
                    $("#q6").val(),
                    $("#q7").val(),
                    $("#q8").val(),
                    $("#q9").val(),
                    $("#q10").val()
                ]
            };

            $.ajax({
                url: "/api/friends",
                method: "POST",
                data: userData
            }).then(res => {
                $("#bestFriend").text(res.name);
                $("#bestFriendPhoto").attr("src", res.photo);
                $("#bestFriendModal").modal("toggle");
            });
        }
    });
});
