 function show(val)
         {
             document.getElementById("ans").value+=val
         }
function calculate_validate()
         {
             let x = document.getElementById("ans").value
             let k=x.indexOf("/0");
             if(x=="")
             {
               alert("Please enter the expression");  
               return false;  
            }
            else if(k!=-1)
           {
               alert("Division by zero not possible");  
 document.getElementById("ans").value = ""
               return false;            
            }
             let y = eval(x)
             if(y>1000000000000 || y<-10000000000)
           {
            alert("Out of Bound");  
 document.getElementById("ans").value = ""
               return false; 
             }
             document.getElementById("ans").value = y
         }
function remove()
         {
             document.getElementById("ans").value = ""
         }