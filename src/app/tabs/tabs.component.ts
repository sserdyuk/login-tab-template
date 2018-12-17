import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import { isAndroid } from 'tns-core-modules/platform';

@Component({
  selector: 'ns-tabs',
  templateUrl: './tabs.component.html',
  moduleId: module.id
})
export class TabsComponent implements OnInit {
  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routerExtension.navigate(
      [
        {
          outlets: {
            homeTab: ['home'],
            browseTab: ['browse'],
            searchTab: ['search']
          }
        }
      ],
      { relativeTo: this.activeRoute }
    );
  }

  getIconSource(icon: string): string {
    const iconPrefix = isAndroid ? 'res://' : 'res://tabIcons/';

    return iconPrefix + icon;
  }
}
