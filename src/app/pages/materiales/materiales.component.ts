import { Component } from '@angular/core';
import { Material } from '../../models/material.model';
import { MaterialesService } from '../../services/materiales.service';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrl: './materiales.component.scss'
})
export class MaterialesComponent {
  constructor(
    public materialService: MaterialesService
  ){}
}
