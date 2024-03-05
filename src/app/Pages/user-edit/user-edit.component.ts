import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {

  userId!: any;
  user!: any;
  // funcoes adicionais para o componente de animacao
  isLoading: boolean = false;
  loadingTitle: string = ''
  errors: any=[];

  // construtor da rota
  constructor(private route: ActivatedRoute, private userService: UserService){

  }
  // pesquisando os dados pelo id
  ngOnInit(){

    this.userId = this.route.snapshot.paramMap.get('id');
    // alert(this.userId);

    this.isLoading = true;
    // pegando os dados usando o servicer
    this.userService.getUser(this.userId).subscribe(res=> {
      console.log(res)
      this.user = res.data
      this.isLoading = false
    })

  }
  
  // funcao para editar
  updateUser(){
      var inputDate = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      }

      this.isLoading = true;

      this.userService.updateUser(inputDate, this.userId).subscribe({
        next: (res:any)=>{
          console.log(res)
          alert(res.message)
          this.isLoading = false
          
        },
        error: (err:any)=>{
          console.log(err)
          this.errors = err.error.errors
          this.isLoading = false
        }
      });
      
  }
}
