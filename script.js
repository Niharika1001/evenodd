function evenodd(){
    var num=document.getElementById("num").value;
   // console.log(num%2===0?"The given number is even i.e."+x:"The given number is odd");
  
  if(num==""){
    alert("Enter number")
    return
  }
  
  else{
   if(num % 2 === 0){
    var x=document.getElementById("demo").innerHTML="The given number is even";
   }
   else{
   var x=document.getElementById("demo").innerHTML="The given number is odd";
  }
}
}

