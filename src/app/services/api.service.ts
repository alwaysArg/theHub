import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Add this line

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getMaterials(){
    return this.http.get<{result: string[]}>("http://colormind.io/list/")
  }
}
