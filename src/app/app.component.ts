import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _traslate: TranslateService) {
    this._traslate.setDefaultLang('pt-BR');
    this._traslate.use('pt-BR');
  }
}
