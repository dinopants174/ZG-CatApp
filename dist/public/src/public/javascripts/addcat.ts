interface Cat {
  name: String,
  age: Number,
  color: String
}

$(document).ready(function() {    
  console.log("Hello World!");
  let $addCatForm: JQuery = $("#addCatForm");
  let $newCat: JQuery = $("#newCat");

  let onError = (data: JQuery.TypeOrArray<JQueryXHR>, status: String) => {
    console.log("Status: ", status);
    console.log(typeof status);
    console.log("Error: ", data);
  };
  
  let onPostCatSuccess = (data: Cat, status: String) => {
    $addCatForm.find('input:text').val('');
    $newCat.append("<h3>Congratulations on adopting your new cat!</h3>");
    $newCat.append("<p> Name: " + data.name + "</p><p> Age: " + data.age.toString() + "</p>" + "<p> Color: " + data.color + "</p>");
  };

  $addCatForm.submit(function(event){
    event.preventDefault();
    $newCat.html('');
    let name: string = $addCatForm.find("[name='name']").val() as string;
    let age: number = parseInt($addCatForm.find("[name='age']").val() as string);
    let color: string = $addCatForm.find("[name='color']").val() as string;

    if (name !== "" && isNaN(age) !== true && color !== ""){
      $.post("addcat", {
        name: name,
        age: age,
        color: color
      }).done(onPostCatSuccess)
        .fail(onError);
    }
  });  
});