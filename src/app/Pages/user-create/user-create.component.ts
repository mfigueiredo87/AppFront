import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
 // cunstrutor par chamar o service
 constructor(private userService: UserService){
 }

  name!: string
  email!: string
  password!: string

  // funcoes adicionais para o componente de animacao
  isLoading: boolean = false;
  loadingTitle: string = ''
  errors: any=[];
   // funcao para salvar

   saveUser(){

    this.isLoading = true
    this.loadingTitle = 'Saving'
    var inputData = {
      name:this.name,
      email: this.email,
      password: this.password
    }
    // para comit
 // para comit
 this.userService.saveUser(inputData).subscribe({
  next: (res:any)=>{
    console.log(res, 'response')

    alert(res.message);
    this.name = '';
    this.email = '';
    this.password ='';
    this.isLoading = false
  },
  error: (err: any) =>{
    this.errors = err.error.errors;
    this.isLoading = false
    console.log(err.error.errors, 'errors')
  }
})
}

}
