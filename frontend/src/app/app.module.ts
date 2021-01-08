import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoronaSignComponent } from './corona-sign/corona-sign.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [AppComponent, CoronaSignComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
