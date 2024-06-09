const paracount = document.getElementById('count');
const oddeven = document.getElementById('demoo');
let c = 0;
function incr ()
{
    c++;
    if(c>20)
    {
        alert("Maximum Number size is 20.");
    }
    else
    {
        if(c%2==0)
            {
                oddeven.innerHTML = "EVEN NO.";
                paracount.textContent=c;
            }
        else
            {
            oddeven.innerHTML = "ODD NO.";
            paracount.textContent=c
            }
     }
}


function decr ()
{
    c--;
    if(c>=0)
    {
    
    {
        if(c%2==0)
            {
                oddeven.innerHTML = "EVEN NO.";
                paracount.textContent=c;
            }
        else
            {
            oddeven.innerHTML = "ODD NO.";
            paracount.textContent=c
            }
     }
    }
    else
    {
        alert("Minimum Number size is 0.");
    }
}

function reset ()
{
    c = 0;
    paracount.textContent=c
    oddeven.innerHTML = "0";
}