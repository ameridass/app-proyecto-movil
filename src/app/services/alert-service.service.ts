import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor(private alertController: AlertController, private router: Router) { }

  async showConfirm(title: string, alert: string, urlPath: string) {
    const confirm = await this.alertController.create({
    header: title,
    message: alert,
    buttons: [
    {
    text: 'continuar',
    role: 'Ok',
    handler: () => {
    this.router.navigateByUrl(urlPath);
    }
    },
    ]
    });
    await confirm.present();
  }


}
