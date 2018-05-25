import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';

import { LoginPage } from '../login/login';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	
	 responseData : any;
  userData = {"username": "","password": "", "name": "","email": "","photo": ""};

  constructor(public navCtrl: NavController, private authService: AuthServiceProvider ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  

  signup(){
     this.authService.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(LoginPage);
      }
      else{ console.log("User already exists"); }
    }, (err) => {
      // Error log
    });

  }

  login(){
    //Login page link
    this.navCtrl.push(LoginPage);
  }

}

