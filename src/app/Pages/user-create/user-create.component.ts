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

   // funcao para salvar

   saveUser(){
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
  },
  error: (err: any) =>{
    console.log(err, 'errors')
  }
})
}

}
