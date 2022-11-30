import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  id=""
  password=""

  constructor(private route:Router){}

  readValues=()=>{
    let admin:any={"id":this.id,"password":this.password}
    console.log(admin)

    if(this.id=="1122" && this.password=="12345")
    {
      this.route.navigate(['/addcourses'])
    }
    else{
      alert("Invalid Credentials")
    }
  }


}
