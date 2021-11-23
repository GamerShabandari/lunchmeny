const dagensDag = new Date();
let veckoDag = dagensDag.getDay();

let dagVal = document.getElementById("dagVal");

let dagensMat = document.getElementById("dagensMat");


dagVal.addEventListener("change" , function(){
   
    veckoDag = dagVal.value; 

    switch(veckoDag){
        case "1":
            console.log("pizza");
            dagensMat.insertAdjacentHTML("beforeend" , "<h3>pizza</h3>");
        break;
        case "2":
            console.log("pasta");
            dagensMat.insertAdjacentHTML("beforeend" , "<h3>pasta</h3>");
        break;
        case "3":
            console.log("sushi");
            dagensMat.insertAdjacentHTML("beforeend" , "<h3>sushi</h3>");
        break;
        case "4":
            console.log("burgare");
            dagensMat.insertAdjacentHTML("beforeend" , "<h3>burgare</h3>");
        break;
        case "5":
            console.log("kebab");
            dagensMat.insertAdjacentHTML("beforeend" , "<h3>kebab</h3>");
        break;
        default:
            console.log("vi har stängt på helger");
            dagensMat.insertAdjacentHTML("beforeend" , "<h3>stängt på helger</h3>");
    }
});