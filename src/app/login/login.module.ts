import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule} from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, LoginRoutingModule, MatFormFieldModule, MatInputModule
  ],
  declarations: [LoginComponent],
  providers: [ LoginService ]
})
export class LoginModule { }
