import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  getdata(val){
    alert(val)
  }

  list=[]
  // list:any[]=[];
  addtask(item){
    console.log(this.list)
    this.list.push({id:this.list.length,name:item})
  }
  removeTask(id:number){
    console.log(id)
    this.list=this.list.filter((item) =>{
      return item.id !== id;
    })
  }

  title="Send Data Child to Parent Component"
  data=10;
  updateChild(){
    this.data=Math.floor(Math.random()*10)

  }

  userDetails=[
    {name:"anil sidhu", email : "anil@gmail.com" },
    {name:"sidhu", email : "anil2@gmail.com" },
    {name:"anil", email : "anil3@gmail.com" }
  ]

}
