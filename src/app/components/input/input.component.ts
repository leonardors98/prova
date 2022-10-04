import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';

  @Input() label: string = '';

  @Input() type: 'text' | 'number' | 'password' | undefined;

  @Input() controlName!: string;

  public formControl!: FormControl;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit() {
    this.formControl = <FormControl>(
      this.controlContainer.control?.get(this.controlName)
    );
  }
}
