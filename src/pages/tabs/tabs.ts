import { Component } from '@angular/core';
import { TransPage } from '../trans/trans';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TransPage;

  constructor() {

  }
}
