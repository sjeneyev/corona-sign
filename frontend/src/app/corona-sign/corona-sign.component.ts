import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as SignaturePad from 'signature_pad';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-corona-sign',
    templateUrl: './corona-sign.component.html',
    styleUrls: ['./corona-sign.component.scss'],
})
export class CoronaSignComponent implements OnInit, AfterViewInit {
    canvas;
    signaturePad;
    signForm: FormGroup;
    employees = [];
    isloading: boolean;
    names = [];
    filteredOptions: Observable<string[]>;
    selectedEmp = {};
    idNumber = '';
    isTest = false;
    imageUrl: SafeUrl;

    constructor(
        private formBuilder: FormBuilder,
        private el: ElementRef,
        private dataService: DataService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this.isloading = true;
        this.signForm = this.formBuilder.group({
            fullName: [null, [Validators.required, Validators.minLength(2)]],
            employeeId: [null, [Validators.required, Validators.minLength(7)]],
            // signature: [null, [Validators.required]],
        });
        this.dataService.getEmployees().subscribe((response) => {
            response.forEach((item) => {
                const emp = {
                    fullName: `${item.firstName} ${item.lastName}`,
                    idNumber: item.idNumber,
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

    ngAfterViewInit() {
        this.canvas = this.el.nativeElement.querySelector('canvas');
        this.signaturePad = new SignaturePad.default(this.canvas);
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.names.filter((option) =>
            option.toLowerCase().includes(filterValue)
        );
    }

    onSign(): void {
        console.log(this.signaturePad.toDataURL('jpg'));
        const data: FormData = new FormData();
        Object.keys(this.selectedEmp).forEach((key) => {
            data.append(key, this.selectedEmp[key]);
        });
        // data.append('signature', this.signaturePad.toDataURL());
        this.selectedEmp['signature'] = this.signaturePad.toDataURL('jpg');

        this.dataService
            .addSignature(this.selectedEmp)
            .subscribe((response) => {
                console.log(response);
            });
    }

    get formControls() {
        return this.signForm.controls;
    }

    onTest() {
        this.isTest = true;
        this.dataService.getSignatures().subscribe((response) => {
            const unsafeImageUrl = URL.createObjectURL(response);
            this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(
                unsafeImageUrl
            );
        });
    }
}
