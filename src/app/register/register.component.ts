import { Component, OnInit } from "@angular/core"
import { FormArray, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { AuthserviceService } from "../Services/authservice.service"
import { Observable } from "rxjs"
import { User } from "../ViewModel/User.model"
import { AbstractControl, ValidationErrors } from "@angular/forms"
import { passwordValidatorFn, passwordValidatorMatchFn } from "./passwordVlidatorFn"
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  users = []
  constructor(private auth: AuthserviceService, private router: Router) {}
  form!: FormGroup
  phonePatern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  ngOnInit(): void {
    let phones = new FormArray([new FormControl("", [Validators.required, Validators.pattern(this.phonePatern)])])

    this.getAllUsers()
    this.form = new FormGroup(
      {
        fullName: new FormControl("", [Validators.required,Validators.pattern('[A-Za-z]{5,}')]),
        email: new FormControl(
          "",
          [Validators.required, Validators.email,this.emailValitor()]
          // , this.validateEmail
        ),
        // this.getAllUsers()
        phones: phones,
        password: new FormControl("", [Validators.required, Validators.minLength(5)]),
        validatePasswoed: new FormControl("", [Validators.required, Validators.minLength(5)]),
        address: new FormGroup({
          city: new FormControl("", [Validators.required]),
          postalCode: new FormControl("", [Validators.required]),
          street: new FormControl("", [Validators.required]),

        }),
        referral: new FormControl("", [Validators.required, Validators.minLength(5)]),
        referralOther: new FormControl("", [Validators.required, Validators.minLength(5)]),
      },
      { validators: [passwordValidatorFn, passwordValidatorMatchFn] }
    )
  }
  addMore() {
    const control = new FormControl("", [Validators.required, Validators.pattern(this.phonePatern)])
    ;(<FormArray>this.form.get("phones")).push(control)
  }
  deletePhone(index: number) {
    this.controls.splice(index, 1)
  }
  get controls() {
    // a getter!
    return (<FormArray>this.form.get("phones")).controls
  }
  // validatePassword():ValidatorFn{
  // return (formGroup:FormGroup)=>{
  //   const ageControl = formGroup.get('password');
  //   const roomControl = formGroup.get('validatePasswoed');
  //   return {'err':true};

  // }
  // }
  getAllUsers() {
    return this.auth.getAllUses().subscribe(
      (res) => {
        console.log(res)
        this.users = res
      },
      (err) => console.log(err)
    )
  }
  // validateEmail(): any {
  //   console.log("va")

  //   const promise = new Promise<any>((resolve, reject) => {
  //     if (this.users.length && this.users.filter((user: any) => user.email == this.form.value.email).length) {
  //       resolve({ "invalid email": true })
  //     } else {
  //       resolve(null)
  //     }
  //   })
  //   return promise
  //   // return true
  // }
  register() {
    this.auth.register(this.form.value).subscribe(
      (res) => {
        console.log(res)
        this.router.navigate(["/"])
      },
      (err) => {
        console.log(err)
      }
    )
  }

  get fullName() {
    return this.form.get('fullName');
  }

  get email() {
    return this.form.get('email');
  }
  emailValitor():ValidatorFn{
    return(control:AbstractControl):ValidationErrors|null=>{
      let emailVal:string=control.value;
      let validtationError={'EmailNotValid':{'value':emailVal}}
      if(emailVal.length==0 && control.untouched){
        return null;
      }
      return (emailVal.includes('@'))?null:validtationError;
    }
  }

  get phoneNumbers() {
    return this.form.get('phoneNo') as FormArray;
  }
  get referral() {
    return this.form.get('referral');
  }
  updateReferralValidators() {
    if (this.referral?.value == "other") {
      this.form.get('referralOther')?.addValidators([Validators.required]);
    }
    else {
      this.form.get('referralOther')?.clearValidators();
    }
    this.form.get('referralOther')?.updateValueAndValidity();
  }
}
