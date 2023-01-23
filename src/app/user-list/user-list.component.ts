import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { response } from 'express';
import { UserdataService } from '../services/userdata.service'
@Component({ 
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  name: string;
users:any
  constructor(private userdata:UserdataService) { 
    this.userdata.userapi().subscribe((data)=>{
      console.log("data",data);
      this.users=data
    })
    this.name="to way binding"
  }
  getuserFormdata(data:any){
    this.userdata.saveUsers(data).subscribe((response)=>{
      console.log(response)
    })
  }
  

  ngOnInit(): void {

  }
  title="Two way Binding"
  // name:any
  title1="Template Driven Form"
  userLogin(item:any){
    console.log(item)
  }
  title2="Reactive form"
  loginForm1 = new FormGroup({
    user : new FormControl('',[ Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  loginuser(){
    console.log(this.loginForm1.value)
    alert("login successful")
  }
  get uservalidators(){
    return this.loginForm1.get('user')
  }
  
  get passwordValidators(){
    return this.loginForm1.get('password')
  }
title3="Directive"




}
