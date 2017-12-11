import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { RedditPage } from '../reddit/reddit';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RedditPage;
  tab3Root = AboutPage;
  tab2Root = SettingsPage;

  constructor() {

  }
}
