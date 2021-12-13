import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
myform1:any;
  constructor(public routes:Router) { }
id:any;
  ngOnInit(): void {
  this.id= JSON.parse(localStorage.getItem('Users')!);
  this.myform1=new FormGroup({
    username:new FormControl('',Validators.required),
    Password:new FormControl('',Validators.required),
  })
  }
name:string=" ";
password:string=" ";
user:any={};
moveto: boolean | undefined;
  login(){
    console.log(this.myform1.value)
    this.user=Object.assign(this.user,this.myform1.value);
    this.name=this.user['username'];
    this.password=this.user['Password'];    
    console.log(this.name)

    for(let i=0;i<this.id.length;i++){
      if(this.id[i]["username"]==this.name || this.id[i]["Phone"]==this.name || this.id[i]["Email"]==this.name )
       { if( this.id[i]["Password"]==this.password ){
        console.log("correct")
        this.moveto=true;
break;
      }
      else{
        console.log("login failed")
      }
    }}

    if(this.moveto==true){
      this.routes.navigateByUrl('display/'+this.name);
    }
    else{
      alert("login failed")
    }

  }
  get username(){return this.myform1.get('username')}
  get Password(){return this.myform1.get('Password')}
  onclicking(){
    this.routes.navigateByUrl('signup')
  }

}
