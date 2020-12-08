import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserveService } from 'src/app/servers/userserve.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router,
    private serve: UserserveService) { }

  ngOnInit(): void {
  }
  goRegister() {
    this.router.navigateByUrl('register');
  }
  email;
  dataUSer;
  password;
  isNext;
  goLogin() {

    this.serve.checkUser(this.email).subscribe(res => {
      console.log(res);
      if (res.length > 0) {
        this.dataUSer = res;
        if (this.email == this.dataUSer[0].username && this.password == this.dataUSer[0].password) {
          this.isNext = true
        }
      }
      console.log("isnex", this.isNext);
      if (this.isNext == true) {
        localStorage.setItem("token", "abc");
        this.router.navigateByUrl('');

      }


    })
  }

  loadScripts() {
    const dynamicScripts = [
      '../assets/js/vendor/jquery/jquery-3.2.1.min.js',
      '../assets/js/vendor/bootstrap/js/popper.js',
      '../assets/js/vendor/bootstrap/js/bootstrap.min.js',
      '../assets/js/vendor/select2/select2.min.js',
      '../assets/js/vendor/tilt/tilt.jquery.min.js',
      '../assets/js/main.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
