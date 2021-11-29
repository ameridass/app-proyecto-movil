import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.page.html',
  styleUrls: ['./user-configuration.page.scss'],
})
export class UserConfigurationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  consoleLog(){
    console.log('Estas presionando');
  }

}
