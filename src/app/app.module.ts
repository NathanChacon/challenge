import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import {MainDialogModule} from './main-dialog/main-dialog.module'
import {MainDialogComponent} from './main-dialog/main-dialog.component'
import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDialog, MatTableModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import { BrowserModule,Title} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-javascript/sb-admin-material/master/dist/assets/i18n/',
        '.json'
    );*/
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        OverlayModule,
        HttpClientModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MainDialogModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],
    entryComponents:[MainDialogComponent],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule {}
