import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'ArkBankTest';
  public currentLink: string;

  constructor(route: ActivatedRoute ) {
    this.currentLink = 'true';

    // const id: Observable<string> = route.params.pipe(map(p => p.id));
    // const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    // const user = route.data.pipe(map(d => d.user));
    // console.log(url);
  }

  ngOnInit(): void {
  }
}
