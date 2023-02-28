const throttle=(func,limit)=>{
   let flag=true;
    return function(){
        //check if flag is true if true then call the func
        //add arguments 
        let context=this;
        args=arguments;
        if(flag){
            func.apply(context,args);
            //then set the flag to false
            flag=false;
            //once the time limit is passed the fn is called again and flag is set to true;

            setTimeout(()=>{
                flag=true
            },limit)
        }  
          
    }
}