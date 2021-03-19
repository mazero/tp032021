import { UserService } from './@services/user/user.service';
import { IUser } from './@interfaces/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'tp032021';
  public user: IUser;

  constructor(private userService: UserService) {
    this.userService.user.subscribe(user => this.user = user);
  }

  public logout() {
    this.userService.logout();
  }
}
