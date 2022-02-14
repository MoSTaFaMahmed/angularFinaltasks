import { Component, OnInit } from "@angular/core"
import { AuthserviceService } from "src/app/Services/authservice.service"
import { Router } from "@angular/router"

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"],
})
export class LogoutComponent implements OnInit {
  constructor(private auth: AuthserviceService, private router: Router) {}
  logOut() {
    this.auth.logout2()
    this.router.navigate(["/"])
  }
  ngOnInit(): void {}
}
