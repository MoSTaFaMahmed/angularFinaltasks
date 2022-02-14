import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { AuthserviceService } from "src/app/Services/authservice.service"

@Component({
  selector: "app-login2",
  templateUrl: "./login2.component.html",
  styleUrls: ["./login2.component.scss"],
})
export class Login2Component implements OnInit {
  users = []
  constructor(private auth: AuthserviceService, private router: Router) {}
  form!: FormGroup
  phonePatern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  ngOnInit(): void {
    this.getAllUsers()
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    })
  }

  getAllUsers() {
    return this.auth.getAllUses().subscribe(
      (res) => {
        console.log(res)
        this.users = res
      },
      (err) => console.log(err)
    )
  }

  login() {
    this.auth.login(this.form.value).subscribe(
      (res) => {
        const user = res.find((el: any) => el.email == this.form.value.email)
        console.log(user)
        if (user) {
          if (user.password == this.form.value.password) {
            console.log("Success")
            let token = Math.random() * 14525757000000000000
            localStorage.setItem("token", String(token))
            console.log(token)
            this.router.navigate(["/"])
          } else {
            alert("incorrect Email or password")
            console.log("incorrect Email or password")
          }
        } else {
          alert("incorrect Email or password")

          console.log("incorrect Email or password")
        }
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
