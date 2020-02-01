import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private translate: TranslateService, private titleService: Title ) {
        translate.setDefaultLang('en');
    }

    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    ngOnInit() {
        this.setTitle("Desafio Web - Angular")
    }
}
