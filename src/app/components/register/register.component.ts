import { Component, OnInit } from '@angular/core';
import { UserserveService } from "../../servers/userserve.service"
import izitoast from 'izitoast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Roles = ["students", "Manager"]
  constructor(private userservice: UserserveService) { }
  email;
  userName;
  passWord;
  occupation;
  name;
  passWordConfirm; lastname; firstname; phonenumber
  ngOnInit(): void {
  }
  register() {
    if (this.passWord != this.passWordConfirm) {
      izitoast.show({
        title: "Happy",
        class: "foo",
        progressBarColor: "red",
        message: `Vui lòng nhập lại mật khẩu`
      })
    } else if (!this.email) {
      izitoast.show({
        title: "Happy",
        class: "foo",
        progressBarColor: "red",
        message: `Vui lòng nhập email`
      })
    } else {
      let data = {
        username: this.email,
        password: this.passWord,

        lastname: this.lastname,
        firstname: this.firstname,
        phone: this.phonenumber,
        occuapation: this.occupation
      }
      this.userservice.register(data).subscribe(res => {
        console.log(res);
        if (res) {
          izitoast.show({
            title: "Happy",
            class: "foo",
            progressBarColor: "blue",
            message: `Register success`
          })
        }

      })
    }

  }
  changeSelect(value) {
    this.occupation = value
  }



}
