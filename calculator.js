var buttons = document.getElementsByTagName("button");
var display= document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i=0;i<buttons.length;i++){
buttons[i].addEventListener('click',function(){
	 
	 var text= this.getAttribute('value');
     
     if (text=="+") {
     	operator='+';
     	operand1=parseFloat(display.textContent);
     	display.textContent="";

     }
     else if (text=="-") {
     	operator='-';
     	operand1=parseFloat(display.textContent);
     	display.textContent="";
     	
     }
     else if (text=="*") {
     	operator='*';
     	operand1=parseFloat(display.textContent);
     	display.textContent="";
     }
      else  if (text=="/") {
        operator='/';
        operand1=parseFloat(display.textContent);
        display.textContent="";
     }
     else if (text=="%") {
     	operator='%';
     	operand1=parseFloat(display.textContent);
     	display.textContent="";
     }
     else if (text=="+/-") {
     	operator='-';
     	operand1=parseFloat(display.textContent);
     	display.textContent="";
     	
     }
    else if (text=="="){
        operand2=parseFloat(display.textContent);
        if (operand2==0 && operator=="/"||operator=="%") {display.textContent="Error";}
        else{
        	var result=eval(operand1+""+operator+"" +operand2);
        display.textContent=result;
        }
        
     }
     else if(text=="AC"){
     	display.textContent="";
     }
     else{
     	display.innerText+=text;
     }

    

});
}