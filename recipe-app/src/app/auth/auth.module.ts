import {NgModule} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModel} from '../shared/shared.model';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: AuthComponent}]),
    SharedModel
  ]
})
export class AuthModule {

}
