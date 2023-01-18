import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';

function(name,second){
  alert(name)
  console.log(name)
  alert(second)
  console.log(second)
}
fun(val){
  console.log(val)
}
displayVal='';
getValue(val:any){
  console.warn(val)
  this.displayVal = val

}
data="counter with angular"
count = 0;
counter(type:string){
  type === 'Add' ?this.count++ :this.count--;
  // this.count++;
}

data1="property Binding"
name = "peter"
disable = false;

data2 = "if-else conditions"
show = false;

data3 = "Multiple condition or if else"
color ="blue"

data4="Switch Case"
color1 = "red";

data5 = "For Loop"
user =['Anil','sam','peter','deepak','adarsh'];
userDetails = [{name:'Anil',email:'anil@123',phone:'3625687'},
{name:'Deepak',email:'dnil@123',phone:'45625687'},
{name:'mnil',email:'mnil@123',phone:'7825687'},
]

data6 = "Nasted Loop"
users = [
  {name:'Anil',phone:'1111',socialAccount:['facebook','insta']},
  {name:'ayush',phone:'2222',socialAccount:['youtube','whatsapp']},
  {name:'peter',phone:'3333',socialAccount:['telegram','tweeter']},
  {name:'palak',phone:'4444',socialAccount:['linkdin','snapchat']}
]

data7 = "Style Binding"
color2="red";
bgcolor="green";
updateColor(){
  this.color2 = "blue"
  this.bgcolor="red"
}

userData:any={}
getData(data){
  console.log(data)
  this.userData=data

}

tag="Toggle Button"
display=true
toggle(){
  this.display=!this.display

}

}
