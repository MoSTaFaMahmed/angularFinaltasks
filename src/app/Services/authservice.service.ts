import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable, observable, Subject } from "rxjs"
import { User } from "../ViewModel/User.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class AuthserviceService {
  private loginFlag: BehaviorSubject<boolean>
  private userName: BehaviorSubject<string>
  url = " http://localhost:3000"
  isLoggedInSubject!: BehaviorSubject<boolean>
  // isLogged!: boolean
  constructor(private http: HttpClient) {
    //behavor subject:
    this.loginFlag = new BehaviorSubject<boolean>(this.IsUserLogged)
    this.userName = new BehaviorSubject<string>("")
    this.isLoggedInSubject = new BehaviorSubject<boolean>(this.isLogedIn)
  }
  logIn(userName: string, Pass: string) {
    let userToken = "01207284793"
    localStorage.setItem("Token", userToken)
    this.loginFlag.next(true)
    this.userName.next(userName)
  }

  logOut() {
    localStorage.removeItem("Token")
    this.loginFlag.next(false)
    this.userName.next("")
  }
  get IsUserLogged(): boolean {
    return localStorage.getItem("Token") ? true : false
  }
  //return observable
  getLogStatus(): Observable<boolean> {
    return this.loginFlag.asObservable()
  }
  getUserName(): Observable<string> {
    return this.userName.asObservable()
  }

  register(user: User) {
    return this.http.post<any>(this.url + "/users", user)
  }
  login(body: any) {
    console.log(body)
    return this.http.get<any>(this.url + "/users")
  }
  logout2() {
    localStorage.clear()
  }
  getAllUses() {
    return this.http.get<any>(this.url + "/users")
  }
  // isLoggedInSubject():Subject<boolean>{
  // return this.subject({next:this.isLogedIn})
  // }
  isLoggedinFn() {
    this.isLogedIn ? this.isLoggedInSubject.next(true) : this.isLoggedInSubject.next(false)
  }
  get isLogedIn(): boolean {
    return localStorage.getItem("token") ? true : false
  }
}
