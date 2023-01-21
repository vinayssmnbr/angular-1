import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserdataService } from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello'; 
  users:any
  constructor(private userdata:UserdataService){

    console.log("userdata",userdata.users)
    this.users= userdata.users();

    this.userdata.userapi().subscribe((data)=>{
      console.log("data",data);
      this.users=data
    })

  }
}
