import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

    // funcao para salvar
    saveUser(inputData: object){

      return this.httpClient.post(`http://localhost:8000/users`,inputData);
    }
}
