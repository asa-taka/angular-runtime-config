import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private config: ConfigService) {
    console.log(config);
    // => {
    //   runtime: {
    //     apiRoot: "http://localhost:9090",
    //     message: "overwritten by runtime-config.js",
    //   }
    // }
  }
}
