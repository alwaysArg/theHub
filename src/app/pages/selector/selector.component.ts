import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {
  colors : string[];

  nameControl = new FormControl('');
  colorControl = new FormControl('');

  constructor(
    private api: ApiService
  ) {
    this.colors = [];
    this.api.getMaterials().subscribe(
      data => {
        this.colors = data.result;
      }
    )
  }
  
  addMaterial() {
    alert('Material added!' + this.nameControl.value + ' ' + this.colorControl.value);
  }
}
