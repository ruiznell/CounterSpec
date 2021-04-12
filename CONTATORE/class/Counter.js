//Esta es la clase
class Counter{

    constructor(iniziale=0, min=null, max=null){ 
     this.value= Number (iniziale) 
     this.max= max 
     this.min= min 

    if(this.value > this.max  && this.max !== null)
     {
          this.value = this.max
          throw Error('initial è maggiore di max')
     }  
     else if(this.value < this.min && this.min !== null) 
     {   
          this.value=this.min
          throw Error('initial è minore di min')
     }
      
   } 


    increment(){
        

        if (this.max === null){
            this.value++;     
        }

        else if (this.value < this.max){
        this.value++;
        }         
       
    }


    decrement(){
        if (this.min === null ){
            this.value--     
        }
        else if (this.value > this.min){
            this.value--
        }
        
    }

}

export default Counter;