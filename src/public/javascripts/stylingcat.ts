$(document).ready(function() {    
    console.log("Styling!");  
    let $surpriseButton = $("#surpriseButton");
    let $coloredSquare = $("#coloredSquare");
    $surpriseButton.click(function(){
        if ($coloredSquare.css("background-color") == "rgb(255, 255, 255)"){
            $coloredSquare.css("background-color", "deepskyblue");
            $surpriseButton.text("ARE YOU NOT ENTERTAINED?!");
        } else {
            $coloredSquare.css("background-color", "white");
            $surpriseButton.text("Click me for a surprise!");
        }
    });

    let degree: number = 0;
    setInterval(function(){
        if (degree == 360){
            degree = 0;
        } else {
            degree += 45;
        }
        let property: string = "rotate(" + degree.toString() + "deg)"
        $coloredSquare.css("transform", property);
    }, 1000);
});