const validator = {
    
    isValid:function isValid(str){
        let myArray=Array.from(str)  
        let newArray=myArray.reverse();
        // console.log(newArray);
                
        let suma=0;
        for(let i=0;i<newArray.length;i++){
            if(i%2==0){
                suma+=parseInt(newArray[i]);
            } 
            else if((parseInt(newArray[i])*2)<=9){
                suma+=parseInt(newArray[i])*2;
            }
            else{
                let newStr=(parseInt(newArray[i])*2).toString();
                suma+= parseInt(newStr.charAt(0))+parseInt(newStr.charAt(1));
                // console.log(suma);
            }
        }  
        if(suma%10===0){
            return true;
        }
        else{
            return false;
        }
        
    },
    
    
    maskify:function maskify(str){
        if(str.length<=4){
            let res=str.slice(-4);
            return res;
        } 
        else{
            let res=(str.slice(0,-4)).replace((/[0-9]|[A-Z|[a-z]/g),"#")+str.slice(-4);
            return res;    
        }
        
    }

}          
                
                

             

        
        
        
    


export default validator;
