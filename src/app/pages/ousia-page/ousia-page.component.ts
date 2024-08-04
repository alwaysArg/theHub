import { Component } from '@angular/core';



interface PlyDatabase {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-ousia-page',
  templateUrl: './ousia-page.component.html',
  styleUrl: './ousia-page.component.scss'
})
export class OusiaPageComponent {
  plyDatabasesAll: PlyDatabase[] = [
    { value: 'database-0', viewValue: 'Boat' },
    { value: 'database-1', viewValue: 'Silo' },
    { value: 'database-2', viewValue: 'Bridges' },
  ];
}
