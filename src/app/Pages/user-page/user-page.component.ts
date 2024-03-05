import { Component } from '@angular/core';
import { UserResponse, UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  constructor (private userService: UserService){

  }
  users!: UserResponse[];
  isLoading: boolean = false;
  // buscando os dados a partir da API
  ngOnInit(){
      this.getUserLists();

  }

  getUserLists(){
    // component loading
    this.isLoading = true;
    // colocar o service da API para listar os dados
    this.userService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res.data;
      this.isLoading = false;
    });
  }

  // funcao para apagar
  deleteUser(event:any, userId:number){
      if(confirm('Quer apagar exactamente o dado selecionado ?')){
        event.target.innerText = "Apagando..."
        this.userService.destroyUser(userId).subscribe((res:any)=>{
            this.getUserLists();
            alert(res.message);
        });
      }
  }
}
