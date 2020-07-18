Make a Calculator in Javascript which can do operations as Addtion, Subtraction, Multiplication, Division, Square root, Percentage. 
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

function additionyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 + num2;
}

function substractionBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 - num2;
}


function squareBy() 
{ 
        num1 = document.getElementById("Number").value;
          document.getElementById("result").innerHTML =Math.sqrt(num1) ;
}

function percentage(num, per)
{
  return (num/100)*per;
}
          
console.log(percentage(1000, 47.12));
