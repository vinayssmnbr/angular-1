import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserModule} from './user/user.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    LoginComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    AppRoutingModule
    // NgbModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }