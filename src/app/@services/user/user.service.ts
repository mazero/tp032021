import { map, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@app/@interfaces';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

const apiUrl: string = environment.apiUrl;
const keyUser: string = 'user';
const routes = {
  login: () => `${apiUrl}/auth/login`
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<IUser>;
  public user: Observable<IUser>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem(keyUser)))
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): IUser {
    console.log('userSubject =>', this.userSubject.value)
    return this.userSubject.value;
  }

  public login(username: string, password: string):Observable<IUser> {
    return this.http.post<IUser>(routes.login(), {username, password}).pipe(
      map(user => {
        localStorage.setItem(keyUser, JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  public logout(): void {
    localStorage.removeItem(keyUser);
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  public register(): void {}



  public getAll(): void {}

  public getById(): void {}

  public update(): void {}

  public delete(): void {}
}
