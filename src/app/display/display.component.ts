import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public route:ActivatedRoute,public router:Router) { }
id:any;
username:any;
displayinfo:any={};
  ngOnInit(): void {
    this.id= JSON.parse(localStorage.getItem('Users')!);
    this.username = this.route.snapshot.paramMap.get('username');
    console.log(this.username)
    for(let i=0;i<this.id.length;i++)
    {
      if(this.id[i]["username"]==this.username || this.id[i]["Mobile"]==this.username || this.id[i]["Email"]==this.username)
      {this.displayinfo=this.id[i]}
    }
    console.log(this.displayinfo)

  }
  logout(){
    this.router.navigateByUrl('/')
  }

}
