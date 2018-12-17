import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';

@Component({
  selector: 'ns-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  moduleId: module.id
})
export class WelcomeComponent implements OnInit {
  constructor(private routerExtension: RouterExtensions) {}

  ngOnInit() {}

  onMoveOn() {
    this.routerExtension.navigate(['../tabs/default'], { clearHistory: true });
  }
}
