import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';
import { StudentPageComponent } from './Pages/student-page/student-page.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { UserEditComponent } from './Pages/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, title: 'Inicio'},
  {path: 'about', component: AboutPageComponent, title: 'Sobre Nós'},
  {path: 'contact', component: ContactPageComponent, title: 'Contactos'},
  {path: 'students/create', component: StudentCreateComponent, title: 'Novo Estudante'},
  {path: 'students', component: StudentPageComponent, title: 'Listar Estudantes'},
  {path: 'users/create', component: UserCreateComponent, title: 'Novo Usuario'},
  {path: 'users/:id/edit', component: UserEditComponent, title: 'Editar Usuario'},
  {path: 'users', component: UserPageComponent, title:'Lista de Usuarios'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
