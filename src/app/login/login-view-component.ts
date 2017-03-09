import {Component} from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './login-form.component.html'
})
export class LoginViewComponent {
    loginErrorMsg: string = "";
    constructor(private router:Router) {

    }

    doLogin(username: string, password: string) {
        if(!username && !password)
            this.loginErrorMsg = "Both fields are mandatory";
        else if(username != "admin")
            this.loginErrorMsg = "Username does not exist";
        else if(password !="admin123")
            this.loginErrorMsg = "Password does not match";
        else {
            this.loginErrorMsg = "";
            (<HTMLElement>document.getElementById("headnav")).style.display = "block";
            this.router.navigate(['/dashboard']);
        }
    }
}