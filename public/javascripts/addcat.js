console.log("Hello World!");

var $addCatForm = $("#addCatForm");
var $newCat = $("#newCat");

var onError = function(data, status){
    console.log("Status: ", status);
    console.log("Error: ", data);
};

var onPostCatSuccess = function(data, status){
    $addCatForm.find('input:text').val('');

    $newCat.append("<h3>Congratulations on adopting your new cat!</h3>");
    $newCat.append("<p> Name: " + data.name + "</p><p> Age: " + data.age.toString() + "</p>" + "<p> Color: " + data.color + "</p>");
};

$addCatForm.submit(function(event){
    event.preventDefault();

    $newCat.html('');

    var name = $addCatForm.find("[name='name']").val();
    var age = parseInt($addCatForm.find("[name='age']").val());
    var color = $addCatForm.find("[name='color']").val();

    if (name !== "" && age !== "" && color !== ""){
        $.post("addcat", {
            name: name,
            age: age,
            color: color
        }).done(onPostCatSuccess)
          .fail(onError);
    }
});