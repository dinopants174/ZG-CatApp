$(document).ready(function () {
    console.log("Hello World!");
    let $addCatForm = $("#addCatForm");
    let $newCat = $("#newCat");
    let onError = (data, status) => {
        console.log("Status: ", status);
        console.log(typeof status);
        console.log("Error: ", data);
    };
    let onPostCatSuccess = (data, status) => {
        $addCatForm.find('input:text').val('');
        $newCat.append("<h3>Congratulations on adopting your new cat!</h3>");
        $newCat.append("<p> Name: " + data.name + "</p><p> Age: " + data.age.toString() + "</p>" + "<p> Color: " + data.color + "</p>");
    };
    $addCatForm.submit(function (event) {
        event.preventDefault();
        $newCat.html('');
        let name = $addCatForm.find("[name='name']").val();
        let age = parseInt($addCatForm.find("[name='age']").val());
        let color = $addCatForm.find("[name='color']").val();
        if (name !== "" && isNaN(age) !== true && color !== "") {
            $.post("addcat", {
                name: name,
                age: age,
                color: color
            }).done(onPostCatSuccess)
                .fail(onError);
        }
    });
});
//# sourceMappingURL=addcat.js.map