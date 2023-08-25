let amount = 0
let previous = -1
let total = 0
let locate = 0

function If (){
let answer = Number(document.getElementById("inputer").value)
    if (previous==1){
        total=total+answer
       } if (previous==2){
        total=total*answer
       }
       if (previous==3){
        total=total-answer
       }
       if (previous==4){
        total=Math.pow(total, answer)
       }
       if (previous==5){
        total=total/answer
       }
       if (previous==6){
        total=total%answer
       }
       if (amount==1){
total=answer
       }
        if(previous==0){
         if(locate!=="++"){
         var current = document.getElementById("done").innerHTML  
      console.log("hi") 
    document.getElementById("done").textContent=current+ " " + locate
           }   }

}
function Plus (){
locate= "+"
        amount++
 var current = document.getElementById("done").innerHTML   
let answer = Number(document.getElementById("inputer").value)


If()
if (previous!==0){
document.getElementById("done").textContent=current+answer + " + "
}
document.getElementById("inputer").value=""
previous=1
console.log(total)
document.getElementById("equal").innerHTML="= " + total
}


function Times (){
   locate= "*"
    amount++
    var current = document.getElementById("done").innerHTML   
   let answer = Number(document.getElementById("inputer").value)
If()
if(previous!==0){   document.getElementById("done").textContent= "(" + current+answer + ") * " }
document.getElementById("inputer").value=""
   previous=2
  
   console.log(total)
   document.getElementById("equal").innerHTML="= " + total


   }

   
function Minus (){
   locate = "-"
    amount++
    var current = document.getElementById("done").innerHTML   
   let answer = Number(document.getElementById("inputer").value)

If()
if (previous!==0){
   document.getElementById("done").textContent=current+answer + " - "
   }
document.getElementById("inputer").value=""
   previous=3
  
   console.log(total)
   document.getElementById("equal").innerHTML="= " + total


   }

   function Power(){
      locate = "^"
    amount++
    var current = document.getElementById("done").innerHTML   
   let answer = Number(document.getElementById("inputer").value)
If()
if(previous!==0){   document.getElementById("done").textContent= "(" + current+answer + ") ^ " }
document.getElementById("inputer").value=""
   previous=4
  
   console.log(total)
   document.getElementById("equal").innerHTML="= " + total


   }

   function Divide (){
      locate="/"
    amount++
    var current = document.getElementById("done").innerHTML   
   let answer = Number(document.getElementById("inputer").value)
If()
if(previous!==0){   document.getElementById("done").textContent= "(" + current+answer + ") / " }
document.getElementById("inputer").value=""
   previous=5
  
   console.log(total)
   document.getElementById("equal").innerHTML="= " + total


   }
   function Mod (){
      locate="%"
    amount++
    var current = document.getElementById("done").innerHTML   
   let answer = Number(document.getElementById("inputer").value)
If()
if(previous!==0){   document.getElementById("done").textContent= "(" + current+answer + ") % " }
document.getElementById("inputer").value=""
   previous=6
  
   console.log(total)
   document.getElementById("equal").innerHTML="= " + total
   }

   function Increment(){
      locate="++"
    let answer = Number(document.getElementById("inputer").value)
amount++
var current = document.getElementById("done").innerHTML   
document.getElementById("done").textContent= "((" + current+answer + ")++) " 

If()
if(previous==0){document.getElementById("done").textContent= "((" + current+ ")++) " }
total++
document.getElementById("inputer").value=""
   previous=0
  console.log("done")
   console.log(total)
   document.getElementById("equal").innerHTML="= " + total


   }

   function Decrement(){
      locate="--"
    let answer = Number(document.getElementById("inputer").value)
amount++
var current = document.getElementById("done").innerHTML   
document.getElementById("done").textContent= "((" + current+answer + ")--) " 

If()
if(previous==0){document.getElementById("done").textContent= "((" + current+ ")--) " }
total--
document.getElementById("inputer").value=""
   previous=0
  console.log("done")
   console.log(total)
   document.getElementById("equal").innerHTML="= " + total


   }
   
   function Sqrt(){
      locate="sqrt"
    let answer = Number(document.getElementById("inputer").value)
amount++
var current = document.getElementById("done").innerHTML   
document.getElementById("done").textContent= "sqrt(" + current+answer + ") " 

If()
if(previous==0){document.getElementById("done").textContent= "sqrt(" + current + ") " }
total=Math.pow(total,0.5)
document.getElementById("inputer").value=""
   previous=0
  console.log("done")
   console.log(total)
   document.getElementById("equal").innerHTML="= " + total


   }
   function Cos(){
      locate="Cos"
    let answer = Number(document.getElementById("inputer").value)
amount++
var current = document.getElementById("done").innerHTML   
document.getElementById("done").textContent= "Cos(" + current+answer + ") " 

If()
if(previous==0){document.getElementById("done").textContent= "Cos(" + current + ") " }
total=Math.cos(total)
document.getElementById("inputer").value=""
   previous=0
  console.log("done")
   console.log(total)
   document.getElementById("equal").innerHTML="= " + total


   }

   function Sin(){
      locate="Sin"
    let answer = Number(document.getElementById("inputer").value)
amount++
var current = document.getElementById("done").innerHTML   
document.getElementById("done").textContent= "Sin(" + current+answer + ") " 

If()
if(previous==0){document.getElementById("done").textContent= "Sin(" + current + ") " }
total=Math.sin(total)
document.getElementById("inputer").value=""
   previous=0
  console.log("done")
   console.log(total)
   document.getElementById("equal").innerHTML="= " + total


   }

   function Tan(){
      locate="Tan"
    let answer = Number(document.getElementById("inputer").value)
amount++
var current = document.getElementById("done").innerHTML   
document.getElementById("done").textContent= "Tan(" + current+answer + ") " 

If()
if(previous==0){document.getElementById("done").textContent= "Tan(" + current + ") " }
total=Math.tan(total)
document.getElementById("inputer").value=""
   previous=0
  console.log("done")
   console.log(total)
   document.getElementById("equal").innerHTML="= " + total
   }

   function Equal(){
      amount++
      If()
var current = total
document.getElementById("inputer").value=""
document.getElementById("equal").innerHTML="= " + total
document.getElementById("done").textContent= current

previous=0
   }
   function Clear(){
   
       previous = 0
       total = 0
       locate = 0
       current = 0
       document.getElementById("inputer").value=""
       document.getElementById("equal").innerHTML="= " + total  
       document.getElementById("done").textContent= current
      }