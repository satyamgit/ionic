import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


let apiUrl="http://192.168.1.62/rest-mdsh/api/";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI. 
*/

@Injectable()
export class AuthServiceProvider {

 constructor(public http : HttpClient) { 
    console.log('Hello AuthServiceProvider Provider');
  } 
  
postData(credentials, type) {
    return new Promise((resolve, reject) => { 
      let headers = new Headers();

      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers}).subscribe(res => {
			resolve(res);
        }, (err) => {
			reject(err);
        });
    });

  }
}
   

 

 
