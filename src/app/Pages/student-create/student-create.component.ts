import { Component } from '@angular/core';
import { StudentService } from './../../Services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.css'
})
export class StudentCreateComponent {

  // cunstrutor par chamar o service
  constructor(private studentService: StudentService){

  }

  name!: string
  course!: string
  email!: string
  phone!: string

  // funcao para salvar

  saveStudent(){
    var inputData = {
      name:this.name,
      course: this.course,
      email: this.email,
      phone: this.phone
    }
    // para comit
    this.studentService.saveStudent(inputData).subscribe({
      next: (res:any)=>{
        console.log(res, 'response')
      },
      error: (err: any) =>{
        console.log(err, 'errors')
      }
    })
  }
}
