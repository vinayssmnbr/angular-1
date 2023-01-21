import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  apiurl="https://api.github.com/users"
 
  constructor(private http:HttpClient) { }
  userapi(){
    return this.http.get(this.apiurl);
  }

  users(){
    return [
      {name:'anil',age:28,email:'anil@gmail.com'},
      {name:'ram',age:38,email:'ram@gmail.com'},
      {name:'shyam',age:30,email:'shyam@gmail.com'}
    ]
  }
}
