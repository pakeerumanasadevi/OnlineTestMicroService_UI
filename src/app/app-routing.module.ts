import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListAllUsersComponent } from './list-all-users/list-all-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LogoutComponent } from './logout/logout.component';
import { ListtAllQuestionsComponent } from './listt-all-questions/listt-all-questions.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { AssignTesttoUserComponent } from './assign-testto-user/assign-testto-user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { TakeTestComponent } from './take-test/take-test.component';
import { ResultsComponent } from './results/results.component';
import { ListAllTestsComponent } from './list-all-tests/list-all-tests.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { AddTestComponent } from './add-test/add-test.component';
import { AssignQuestionToTestComponent } from './assign-question-to-test/assign-question-to-test.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ResultReportComponent } from './result-report/result-report.component';




const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'listUser',component:ListAllUsersComponent},
  {path:'updateUser',component:UpdateUserComponent},
  {path:'logout',component:LogoutComponent},
  {path:'listQuestions',component:ListtAllQuestionsComponent},
  {path:'addQuestion',component:AddQuestionComponent},
  {path:'updateQuestion',component:UpdateQuestionComponent},
  {path:'assignTU',component:AssignTesttoUserComponent},
  {path:'userhome/:id',component:UserHomeComponent},
  {path:'taketest/:id',component:TakeTestComponent},
  {path:'result/:id',component:ResultsComponent},
  {path:'listTest',component:ListAllTestsComponent},
  {path:'updateTest',component:UpdateTestComponent},
  {path:'addTest',component:AddTestComponent},
  {path:'assignTQ',component:AssignQuestionToTestComponent},
  {path:'userNavbar/:id',component:UserNavbarComponent},
  {path:'userProfile/:id',component:UserProfileComponent},
  {path:'report/:id',component:ResultReportComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
