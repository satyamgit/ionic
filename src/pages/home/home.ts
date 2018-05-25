import { Component } from '@angular/core';
import { NavController, App, AlertController  } from 'ionic-angular';
import { WelcomePage } from '../../pages/welcome/welcome';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
}) 
export class HomePage {

 userDetails : any;
  responseData: any;

  userPostData = {"user_id":"","token":""};

  constructor(public navCtrl: NavController, public app: App, public authService:AuthServiceProvider, public alerCtrl: AlertController) {
	const data = JSON.parse(localStorage.getItem('userData'));
   this.userDetails = data.userData;

  this.userPostData.user_id = this.userDetails.user_id;
  this.userPostData.token = this.userDetails.token;

}

  backToWelcome(){
   const root = this.app.getRootNav();
   root.popToRoot();
  }
  
   logout(){
     localStorage.clear();
     setTimeout(() => this.backToWelcome(), 1000);
}
	
 doConfirm() {
    let confirm = this.alerCtrl.create({
      title: '',
      message: 'Are you sure to logout?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
           console.log('Agree clicked');
             this.navCtrl.push(WelcomePage);
            
          }
        }
      ]
    });
    confirm.present()
}
}


