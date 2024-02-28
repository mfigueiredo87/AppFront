import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  // funcao para salvar
  saveStudent(inputData: object){
    
    return this.httpClient.post('http://localhost:8000/api/students',inputData);
  }
}
