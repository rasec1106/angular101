import { ReplaceSpacePipe } from '@shared/pipes/replace-space.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  value = 'Hola mundo';

  constructor(private replaceSpace:ReplaceSpacePipe) { }

  ngOnInit(): void {
    this.value = this.replaceSpace.transform(this.value,'-');
  }

}
