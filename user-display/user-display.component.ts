import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Name } from '../name';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  
  popup = true;
  addForm!: FormGroup;
   response:any;
  

  constructor(private api:UserService,private route:Router) { }
  

  ngOnInit(): void {
    this.addForm = new FormGroup({
      Type: new FormControl('', [Validators.required]),
      Name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      Number: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      plan: new FormControl('', [Validators.required, Validators.maxLength(25)]),
      price: new FormControl('', [Validators.required, Validators.maxLength(5)]),

  });
 
 
}


public Error = (controlName: string, errorName: string) =>{
  return this.addForm.controls[controlName].hasError(errorName);
}
openPlan(){
  this.route.navigate(['user-addon'])
}
openDia(){
  this.route.navigate(['user-addon']);
} 

  /*recharge(){
    this.api.postPlan(this.myForm.value).subscribe({next:(res:Name) => {
      alert('Recharge Successfully');
      this.myForm.reset();
      this.response=res;
      console.log(res)
    },error:(err: any)=>{
    alert('Error occured while recharging')}} )
    }
  
  }*/
  public recharge(addForm: NgForm): void{
    this.api.postPlan(addForm.value)
    .subscribe({
      next:(response:Name)=>{
        console.log(response);
        alert("Name saved successfully");
        addForm.reset();
        
      },
      error:()=>{
        alert("Error while adding records")
      }
      
    });
   

  }
  
 
}




