import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { RedElDirective } from './red-el.directive';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http'
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
// import { AdminModule} from './admin/admin.module'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    LoginComponent,
    ChildComponent,
    HomeComponent,
    RedElDirective,
    NoPageComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    FooterComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule,
    
    
    // AdminModule 

    
    
  
  // NgModule   

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
