import { Component } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  data: any ;
  loginData: any = {
    userName: '',
    userPassword: '',
  }
  isNotLogedin: any = true 
  loading = false


  logOut () {
    //rest local storage
    this.isNotLogedin= true
    sessionStorage.setItem("isAdmin", '');
    sessionStorage.setItem("userName", '');
  }

  constructor(private webService: WebService) {}
  
    logIn = () => {
      this.loading = true;
      console.log(this.loginData)
  
      this.webService.getUser(this.loginData).subscribe((response: any) => {
        console.log(response)

        const userName = response.Table1[0].userName
        const isAdmin = response.Table1[0].isAdmin
        sessionStorage.setItem("isAdmin", isAdmin);
        sessionStorage.setItem("userName", userName);

        this.isNotLogedin = false
        this.loading = false;


        this.loginData = {
          userName: '',
          userPassword: '',
        }
        });
      }
      ngOnInit() { 
        if (sessionStorage.getItem("userName") != '') {
          this.loginData = {
            userName: sessionStorage.getItem("userName"),
            userPassword: sessionStorage.getItem("userPassword"),
          }
          this.isNotLogedin = false     
        };
    
        }   


}
