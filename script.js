function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest  = principal * years * rate / 100;
    let actualYear =  new Date().getFullYear();
    let futureyear = Number(years) + actualYear;  
    if (principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else 
    {

    
    let s = "If you deposit <span class='highlight' >"+ String(principal)+
            ",</span><br> at an interest rate of <span class='highlight' >"+ String(rate)+
            "%</span>.<br>You will receive an amount of <span class='highlight' >"+String(interest)
            +"</span>,<br> in the year <span class='highlight' >"+ String(futureyear)+"</span>";
            
     document.getElementById("result").innerHTML = s;       
     }
    
}

function displayRange(){
    let rate = document.getElementById("rate").value;
    document.getElementById("span_range").innerHTML = rate;
}


  



        