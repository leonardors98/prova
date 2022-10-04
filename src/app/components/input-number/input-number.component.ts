import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
})
export class InputNumberComponent implements OnInit {
  // @Input() placeholder: string = '';

  @Input() label: string = '';

  @Input() mode: string = '';

  // @Input() type: 'text' | 'number' | 'password' | undefined;

  @Input() controlName!: string;

  public formControl!: FormControl;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit() {
    this.formControl = <FormControl>(
      this.controlContainer.control?.get(this.controlName)
    );
  }
}
