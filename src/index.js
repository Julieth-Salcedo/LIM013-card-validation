import validator from "./validator.js";

/* layout1 */

const btn1=document.getElementById("btn1");

btn1.addEventListener("click", btnclick1);
    
function btnclick1(){
    document.getElementById("layout2").classList.add("display");
    document.getElementById("layout2").classList.remove("hidden");

    document.getElementById("layout1").classList.add("hidden");
    document.getElementById("layout1").classList.remove("display");
}


/* layout2 */
const warm=document.getElementById("warm");

const hello=document.getElementById("hello");
const name1=document.getElementById("name1");

const btn2=document.getElementById("btn2");
const num=document.getElementById("num");



btn2.addEventListener("click", btnclick2);
    
function btnclick2(){
    const creditCardNumber=num.value;
    // console.log(creditCardNumber);

    if(creditCardNumber===""){
        warm.innerHTML="campo obligatorio";
        return false;
    }
    // else if(isNaN(creditCardNumber)){
    //     warm.innerHTML="ingrese un numero";
    //     return false;
    // }
    else{
        const isValidCard=validator.isValid(creditCardNumber);
        const maskifyCard=validator.maskify(creditCardNumber);
         
        if(isValidCard===true){
            num.value=maskifyCard;
            window.scroll(0, 0);
                      
            document.getElementById("layout3").classList.add("display");
            document.getElementById("layout3").classList.remove("hidden");

            document.getElementById("layout2").classList.add("hidden");
            document.getElementById("layout2").classList.remove("display");
           
            const name1value=name1.value;
            hello.innerHTML="Hola "+ name1value;

            // result.innerHTML="tarjeta valida";
            return false;
        } 
        else{
            num.value=maskifyCard;
            window.scroll(0, 0);
                       
            document.getElementById("layout2-section1").classList.add("display");
            document.getElementById("layout2-section1").classList.remove("hidden");

            warm.innerHTML="";
            // result.innerHTML="tarjeta invalida";
            return false;
        }
    }
}


/* layout three */

const link1=document.getElementById("link1");

link1.addEventListener("link", linkclick1);
    
function linkclick1(){
    document.getElementById("layout1").classList.add("display");
    document.getElementById("layout1").classList.remove("hidden");

    document.getElementById("layout3").classList.add("hidden");
    document.getElementById("layout3").classList.remove("display");

    window.scroll(0, 0);
}
