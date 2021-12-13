import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ConfirmedValidator } from './confirmed.validator' 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

myform:any;
  constructor(public router:Router) { }
  id:any;
userarray:any=[];
  ngOnInit(): void {
    this.myform=new FormGroup({
      username:new FormControl('',Validators.required),
      Name:new FormControl('',Validators.required),
      Email:new FormControl('',[Validators.required,Validators.email]),
      Password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      ConfirmPassword:new FormControl('',Validators.required),
      Mobile:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      Address:new FormControl('',[Validators.required,Validators.maxLength(30)])
  
      } )
      this.id= JSON.parse(localStorage.getItem('Users')!);
      for(let i=0;i<this.id.length;i++){
        this.userarray.push(this.id[i]['username'])
      }
      for(let j=0;j<this.userarray.length;j++){
        console.log(this.userarray[j])
      }
console.log(this.userarray)
  }
  
  user:any={};
  passwordmatch:boolean=false;
  userexists:boolean=false;
  register(){
    this.passwordmatch=false;
    this.userexists=false;
    this.user=Object.assign(this.user,this.myform.value);
    if(this.user['Password']!==this.user['ConfirmPassword']){
     this.passwordmatch=true;}
     for(let k=0;k<this.userarray.length;k++){
      if(this.user['username']==this.userarray[k])
      {this.userexists=true}
    }
    if(this.passwordmatch==false && this.userexists==false){
    this.adduser(this.user);
  this.passwordmatch=false;
  this.userexists=false;}

  }
  
  get username(){return this.myform.get('username')}
  get Name(){return this.myform.get('Name')}
  get Email(){return this.myform.get('Email')}
  get Password(){return this.myform.get('Password')}
  get ConfirmPassword(){return this.myform.get('ConfirmPassword')}
  get Mobile(){return this.myform.get('Mobile')}
  get Address(){return this.myform.get('Address')}
  
 
  adduser(userg:any){
    let users=[];
    if(localStorage.getItem('Users')){
     users=JSON.parse(localStorage.getItem('Users')!);
   
       users=[userg,...users];
     
     
    }
    else{
      users=[userg];
    }
    localStorage.setItem('Users',JSON.stringify(users));
    alert("Thank you for Registering ,please sign in to continue")
    this.router.navigateByUrl('/');
  }
  

}
