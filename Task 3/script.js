//declare 4 variables
let buttons=document.querySelectorAll('button');
let string=' ';
let input=document.getElementById('inputbar');
let arr=Array.from(buttons);
//loop in this arr of buttons
arr.forEach(button=>{
    // event listeners, 
    button.addEventListener('click',(event)=>{
        //if-else statements, operators,
        if(event.target.innerHTML == '='){
            string=eval(string); //string m jo kuch b evaluate hjayga maths k saath 
            input.value=string;
        }
        //Pressing DEL removes the laast digit
        else if(event.target.innerHTML=='DEL'){
            //remove the last digit
            string=string.substring(0,(string.length-1));
            input.value=string;
        }
        //Pressing AC then All Clears
        else if(event.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        //concatenating the pressed buttons
        else{
            string+=event.target.innerHTML;
            input.value=string;
        }
    });
});
