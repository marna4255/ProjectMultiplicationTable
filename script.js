function addNumbers(){
    let number = 0;
    let result = "";
    
    // For booleans, Number() returns 0 or 1.
    // For dates, Number() returns milliseconds since January 1, 1970 00:00:00.
    // For strings, Number() returns a number or NaN.
    number = Number(document.getElementById("num").value);

    for(let i = 1; i<= 10; i++){
        result += "<p>"+ number + "x" + i + "=" + number * i + "</p>";
    }
    document.getElementById("res").innerHTML = result;
}