const btnForm = document.querySelector('#formbtnn')
const ui = new UI ()
let user = document.querySelector("#username");
let pass = document.querySelector("#password");

const spinner = document.querySelector('.lds-roller ')


btnForm.addEventListener('click',test)

function test(){

    if (user.value =='' || pass.value =='') {
        spinner.style.display = "inline-block"
          ui.printmessage('همه مقادیر را پر کنید  !!!','alert-danger')
      }
      else if (user.value !== 'hamed' || pass.value !== 'hamed'){
        spinner.style.display = "inline-block"
        ui.printmessage('نام کاربری یا رمز عبور اشتباه است  !!!','alert-warning')
      }else{
        spinner.style.display = "inline-block"
        ui.panel();
       
      
      }
}