import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name=""
  designation=""
  phone="" 
  mail="" 

  readValues=()=>{
    let data:any={"name":this.name,"designation":this.designation,"phone":this.phone,
  "mail":this.mail}

  console.log(data)
  alert("Employee Registred")
    this.name=""
    this.designation=""
   this.phone="" 
    this.mail="" 
  
    
  
  }

}
