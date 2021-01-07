import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as SignaturePad from 'signature_pad';

@Component({
  selector: 'app-corona-sign',
  templateUrl: './corona-sign.component.html',
  styleUrls: ['./corona-sign.component.scss']
})
export class CoronaSignComponent implements OnInit, AfterViewInit {

  canvas;
  signaturePad;
  signForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private el: ElementRef) {
  }

  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      employeeId: ['', [Validators.required, Validators.minLength(8)]],
    });

  }

  ngAfterViewInit() {
    this.canvas = this.el.nativeElement.querySelector('canvas');
    this.signaturePad = new SignaturePad.default(this.canvas);
  }

  onSign(): void {
  }
}
