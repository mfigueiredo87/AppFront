import { Component } from '@angular/core';
import { StudentService } from './../../Services/student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.css'
})
export class StudentCreateComponent {

  StudentArray : any[] = [];
  isResultLoaded = false;

  name: string ="";
  course: string ="";
  email: string ="";
  phone: Number =0;

  currentStudentID = "";

  // constructor(private http: StudentService )
  // {
  //   this.getAllStudent();

  // }
  // getAllStudent()
  // {

  //   this.http.get("http://127.0.0.1:8000/student")

  //   .subscribe((resultData: any)=>
  //   {
  //       this.isResultLoaded = true;
  //       console.log(resultData);
  //       this.StudentArray = resultData;
  //   });
  // }

  // register()
  // {

  //   let bodyData = {
  //     "name" : this.name,
  //     "course" : this.course,
  //     "email" : this.email,
  //     "phone" : this.phone
  //   };

  //   this.http.save("http://127.0.0.1:8000/api/student",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Student Registered Successfully");
  //       this.getAllStudent();
  //       this.name = '';
  //       this.course = '';
  //       this.email = '';
  //       this.phone  = 0;
  //   });
  // }
  // setUpdate(data: any)
  // {
  //  this.name = data.name;
  //  this.course = data.course;
  //  this.email = data.email;
  //  this.phone = data.phone;
  //  this.currentStudentID = data.id;
  // }

  // UpdateRecords()
  // {
  //   let bodyData = {
  //     "id" : this.currentStudentID,
  //     "name" : this.name,
  //     "course": this.course,
  //     "email" : this.email,
  //     "phone" : this.phone,

  //   };

  //   this.http.put("http://127.0.0.1:8000/api/student"+ "/"+ this.currentStudentID,bodyData).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Student Registered Updateddd")
  //       this.getAllStudent();

  //   });
  // }

  // save()
  // {
  //   if(this.currentStudentID == '')
  //   {
  //       this.register();
  //   }
  //     else
  //     {
  //      this.UpdateRecords();
  //     }

  // }

  // setDelete(data: any)
  // {


  //   this.http.delete("http://127.0.0.1:8000/api/student"+ "/"+ data.id,{responseType: 'text'}).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Student Deleteddd")
  //       this.getAllStudent();
  //       this.name = '';
  //       this.course = '';
  //       this.email = '';
  //       this.phone  = 0;

  //   });

  // }
}
