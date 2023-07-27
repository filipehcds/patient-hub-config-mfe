import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IConfig } from '../services/config.model';
import { ConfigService } from '../services/config.service';

@Component({
  template: `Project page with resolve

  <p>
  {{ config$ | async | json}}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  config$: Observable<IConfig>;

  constructor(private configService: ConfigService) {
    //
  }
  ngOnInit(): void {
    //
    // this.configValue = this.configService.Config?.MyKey;

    this.config$ = this.configService.config$;
  }
}
