import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';
import { AlertController } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login', 
  templateUrl: 'login.html',
})
export class LoginPage {
  
  responseData : any;
userData = {"username": "","password": ""};
  
  constructor(public navCtrl: NavController,public authService: AuthServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage'); 
  }
  
  login(){
	  
		//console.log("here",this.userData);
		 this.authService.postData(this.userData,"login").then((result) =>{
		  this.responseData = result;
		  console.log(this.responseData);
		  if(this.responseData.userData)
		  {
		  localStorage.setItem('userData', JSON.stringify(this.responseData) )
		  this.navCtrl.push(ListPage);
		  }else
			{
			  let alert = this.alertCtrl.create({
			  title: 'Login Failed!',
			  subTitle: 'Wrong username and/or password.... ',
			  buttons: ['OK']
			  });
			alert.present();
		  }
		 }, (err) => {
		  // Error log
		});
		
		
  }

  
	signup()
	{
	this.navCtrl.push(ListPage);
	}
}
