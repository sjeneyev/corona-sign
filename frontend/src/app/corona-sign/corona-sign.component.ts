import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
    selector: 'app-corona-sign',
    templateUrl: './corona-sign.component.html',
    styleUrls: ['./corona-sign.component.scss'],
})
export class CoronaSignComponent implements OnInit {
    signForm: FormGroup;
    employees = [];
    isloading: boolean;
    names = [];
    filteredOptions: Observable<string[]>;
    selectedEmp = {};
    idNumber = '';

    constructor(
        private formBuilder: FormBuilder,
        private el: ElementRef,
        private dataService: DataService,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.isloading = true;
        this.signForm = this.formBuilder.group({
            fullName: [null, [Validators.required, Validators.minLength(2)]],
            employeeId: [null, [Validators.required, Validators.minLength(7)]],
            signature: [null, [Validators.required]],
        });
        this.dataService.getEmployees().subscribe((response) => {
            response.forEach((item) => {
                const emp = {
                    fullName: `${item.firstName} ${item.lastName}`,
                    idNumber: item.idNumber,
                    signature: false,
                };
                this.employees.push(emp);
                this.names.push(emp.fullName);
            });
            this.filteredOptions = this.formControls.fullName.valueChanges.pipe(
                startWith(''),
                map((value) => this._filter(value))
            );
            this.isloading = false;
        });
    }

    setIdNumber(name) {
        this.selectedEmp = this.employees.filter((item) => {
            return name === `${item.fullName}`;
        });
        this.idNumber = this.selectedEmp[0].idNumber;
        this.formControls.employeeId.setValue(this.idNumber);
        this.selectedEmp = this.selectedEmp[0];
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.names.filter((option) =>
            option.toLowerCase().includes(filterValue)
        );
    }

    setSignature() {
        this.selectedEmp['signature'] = true;
    }

    onSign(): void {
        const data: FormData = new FormData();
        Object.keys(this.selectedEmp).forEach((key) => {
            data.append(key, this.selectedEmp[key]);
        });

        this.dataService
            .addSignature(this.selectedEmp)
            .subscribe((response) => {
                this.dialog.open(ConfirmComponent, {
                    height: '200px',
                    width: '200px',
                    data: 'תודה! יום טוב!',
                });

                this.signForm.reset();
            });
    }

    get formControls() {
        return this.signForm.controls;
    }
}
