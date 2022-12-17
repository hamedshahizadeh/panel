
class UI {
  
    
    printmessage(message , className){
      let messagge = message;
      
      let user = document.querySelector("#username");
      let pass = document.querySelector("#password");
      const spinner = document.querySelector('.lds-roller ')
      const roller = document.querySelector('.form-spintext')
      const div = document.createElement('div')
      div.innerHTML= messagge;
      div.classList ="alert text-center my-3";
      div.classList.add(className)
      setTimeout(() => {
        spinner.style.display = "none"
        roller.appendChild(div)
        setTimeout(() => {
          roller.removeChild(div)
          pass.value =""
          user.value =""
        }, 2000);
      }, 1000);
    }

     panel(){
      const btnForm = document.querySelector('#formbtnn')
      const spinner = document.querySelector('.lds-roller ')
      const gif1 = document.querySelector('#gif1')
      const gif2 = document.querySelector('#gif2')

    setTimeout(() => {
          spinner.style.display = "none"
          if (document.querySelector('.moon')) {
            gif2.style.display ="inline-block"

          }else{
            gif2.style.display ="inline-block"
          }
          setTimeout(() => {
            gif1.style.display ="none"
            gif2.style.display ="none"
            btnForm.href="../../panel.html"
       
           
           
          }, 2000);
       
      }, 1000);
     

    }
    profile(){
      
            
    }

}
     
