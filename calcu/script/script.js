function input(n){
    document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + n;
}

function clr(){
    document.getElementById("input").innerHTML ="";
    document.getElementById("result").innerHTML ="";
}

function calc(){
    if (document.getElementById("input").innerHTML=="")
    {
        document.getElementById("result").innerHTML =0;
    }
    else
    document.getElementById("result").innerHTML =eval(document.getElementById("input").innerHTML);
}