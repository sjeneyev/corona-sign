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
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfirmComponent } from './confirm/confirm.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [AppComponent, CoronaSignComponent, ConfirmComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
