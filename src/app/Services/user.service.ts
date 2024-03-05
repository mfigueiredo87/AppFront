import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// declarando o tipo de resposta de acordo ao JSON
export interface UserResponse{
    "identity": number,
    "name": string
    "email": string
    "created": string
}

// criando a interface
export interface UserResponseType{
  status: Number,
  data: UserResponse[]
}

export interface UserEditResponse{
  status: Number
  data: UserResponse
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

    // funcao para listar todos users
    getUsers(){
        return this.httpClient.get<UserResponseType>(`http://localhost:8000/users`);
    }

    //funcao para listar apenas um user
    getUser(userId:any){
      return this.httpClient.get<UserEditResponse>(`http://localhost:8000/users/${userId}`);
    }


    // funcao para salvar
    saveUser(inputData: object){

      return this.httpClient.post(`http://localhost:8000/users`,inputData);
    }
    // funcao para apagar
    updateUser(inputData: object, userId: number){
      return this.httpClient.patch(`http://localhost:8000/users/${userId}`,inputData);
    }

    // funcao para apagar
    destroyUser(userId: Number){
      return this.httpClient.delete(`http://localhost:8000/users/${userId}`)
    }
}
