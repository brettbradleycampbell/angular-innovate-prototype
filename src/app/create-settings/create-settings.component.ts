import { Component, OnInit } from '@angular/core';
//
//
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
//
//

@Component({
  selector: 'app-create-settings',
  templateUrl: './create-settings.component.html',
  styleUrls: ['./create-settings.component.scss']
})
export class CreateSettingsComponent implements OnInit {

  selected3=true;
  countriesToggle: boolean = true;
  //
  completionMessageSelect = 'custom';
  terminationMessageSelect = 'url';
  //
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['United States', 'Canada'];
  allFruits: string[] = ['United States', 'Canada', 'France', 'Germany', 'Japan', 'Ghana', 'Guatemala', 'Mexico', 'China', 'Thailand', 'India'];

  @ViewChild('fruitInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;
  //
  //


  constructor() {
    //
    //
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    //
    //
  }

  ngOnInit() {
  }

  //
  //
  add(event: MatChipInputEvent): void {
      // Add fruit only when MatAutocomplete is not open
      // To make sure this does not conflict with OptionSelected Event
      if (!this.matAutocomplete.isOpen) {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
          this.fruits.push(value.trim());
        }

        // Reset the input value
        if (input) {
          input.value = '';
        }

        this.fruitCtrl.setValue(null);
      }
    }

    remove(fruit: string): void {
      const index = this.fruits.indexOf(fruit);

      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
      this.fruits.push(event.option.viewValue);
      this.fruitInput.nativeElement.value = '';
      this.fruitCtrl.setValue(null);
    }

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }
    //
    //


}
