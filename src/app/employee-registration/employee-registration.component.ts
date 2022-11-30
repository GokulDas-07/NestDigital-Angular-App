import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
  empid=""
  firstname=""
  lastname=""
  houseno=""
  housename=""
  streetname=""
  pin=""
  district=""
  state=""
  country="" 
  phone="" 
  mail="" 
  parentname="" 
  gender="" 
  highestdegree="" 
  experience="" 
  doj="" 
  username="" 
  password="" 
  confirm=""

  readValues=()=>{
    let data:any={"empid":this.empid,"firstname":this.firstname,"lastname":this.lastname,"houseno":this.houseno,"housename":this.housename,
  "streetname":this.streetname,"pin":this.pin,"district":this.district,"state":this.state,"country":this.country,"phone":this.phone,
  "mail":this.mail,"parentname":this.parentname,"gender":this.gender,"highestdegree":this.highestdegree,"experience":this.experience,
  "doj":this.doj,"username":this.username,"password":this.password,"confirm":this.confirm}

  console.log(data)

  if(this.password==this.confirm){
    alert("Employee Registred")
    this.empid=""
    this.firstname=""
  this.lastname=""
  this.houseno=""
  this.housename=""
  this.streetname=""
  this.pin=""
  this.district=""
  this.state=""
  this.country="" 
  this.phone="" 
  this.mail="" 
  this.parentname="" 
  this.gender="" 
  this.highestdegree="" 
  this.experience="" 
  this.doj="" 
  this.username="" 
  this.password="" 
  this.confirm=""
    
  }
  else
  {
    alert("Password and confirm password doesn't match")
  }
  }

}
