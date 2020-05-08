import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ListAllUsersComponent } from './list-all-users/list-all-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListtAllQuestionsComponent } from './listt-all-questions/listt-all-questions.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { AssignTesttoUserComponent } from './assign-testto-user/assign-testto-user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { TakeTestComponent } from './take-test/take-test.component';
import { ResultsComponent } from './results/results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListAllTestsComponent } from './list-all-tests/list-all-tests.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { AddTestComponent } from './add-test/add-test.component';
import { AssignQuestionToTestComponent } from './assign-question-to-test/assign-question-to-test.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ResultReportComponent } from './result-report/result-report.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    ListAllUsersComponent,
    UpdateUserComponent,
    ListtAllQuestionsComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    AssignTesttoUserComponent,
    UserHomeComponent,
    TakeTestComponent,
    ResultsComponent,
    ListAllTestsComponent,
    UpdateTestComponent,
    AddTestComponent,
    AssignQuestionToTestComponent,
    UserNavbarComponent,
    UserProfileComponent,
    ResultReportComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
