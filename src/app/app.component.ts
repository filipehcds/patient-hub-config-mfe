import { Component, OnInit, VERSION } from '@angular/core';
import { ConfigService } from './services/config.service';
// documented here https://garage.sekrab.com/posts/the-mystic-three-tokens-of-angular-app_bootstrap_listener-app_initializer-platform_initializer

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  myKey: string;

  constructor(private configService: ConfigService) {}
  ngOnInit() {
    // this.myKey = this.configService.Config.MyKey;
    this.myKey = ConfigService.Config.MyKey;
  }
}
