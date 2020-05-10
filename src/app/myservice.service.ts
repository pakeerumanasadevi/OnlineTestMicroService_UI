import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  //////
  
  ///////
  updateemployee: Userdata;
  constructor(private httpService: HttpClient) { }
  public getUsers() {
    console.log("ins service get users");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Userdata>("http://localhost:8762/admin/GetAllUsers");
  }

  public addUser(addemp: Userdata) {
    console.log("ins service add");
    console.log(addemp);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8762/admin/addUser", addemp,  { headers, responseType: 'text'});
  }
  
  public update(updateemployee: Userdata) {
    this.updateemployee = updateemployee;
  }
  public updateMethod() {
    return this.updateemployee;
  }
  public onUpdate(updatemp: Userdata) {
    console.log("ins service update");
    console.log(updatemp);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8762/admin/UpdateUser", updatemp,  { headers, responseType: 'text'});
  }
  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:8762/admin/DeleteUser/" + id,  { headers, responseType: 'text'});
  }
  login(u:Userdata){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8762/admin/Loginuser", u,  { headers, responseType: 'text'});
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  //Questions-----------------------------------------------------------------

  public getQuestions() {
    console.log("ins service get questions");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Questions>("http://localhost:8762/admin/getq");
  }

  public addQues(addQ: Questions) {
    console.log("ins service add questions");
    console.log(addQ);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8762/admin/question", addQ,  { headers, responseType: 'text'});
  }

  updatequestion: Questions;
  public updateQuestion(updatequestion: Questions) {
    this.updatequestion = updatequestion;
  }
  public updateQuesMethod() {
    return this.updatequestion;
  }
  public onUpdateQuestion(updtques: Questions) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8762/admin/uptques", updtques,  { headers, responseType: 'text'});
  }
  deleteQues(id: number) {
    console.log("ins service question delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:8762/admin/delq/" + id,  { headers, responseType: 'text'});
  }

  //test----------------------------------------------------------------------------------------------
  public getTest() {
    console.log("ins service get test");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Test>("http://localhost:8762/admin/gett");
  }
  deleteTest(id: number) {
    console.log("ins service question delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:8762/admin/delt/" + id,  { headers, responseType: 'text'});
  }
  updatetest: Test;
  public updateTest(updatetest: Test) {
    this.updatetest = updatetest;
  }
  public updateTestMethod() {
    return this.updatetest;
  }
  public onUpdateTest(updtTest: Test) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8762/admin/upttest", updtTest,  { headers, responseType: 'text'});
  }
  public addTest(addT: Test) {
    console.log("ins service add questions");
    console.log(addT);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8762/admin/test", addT,  { headers, responseType: 'text'});
  }


  //test for user----------------------------------------------------------------------
  
  getTestbyName(u:string): Observable<any>{//this methos is used
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Test>("http://localhost:8763/user/username/"+ u);
  }
  //questions for user---------------------------------------------------------------------
  public getQuestionsForUser(id:number){
    console.log("in service get questions for user");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Questions>("http://localhost:8763/user/userQuestions/"+ id);
  }
  //get results of test
  public getResults(id:number){
    console.log("in service get questions for user");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Test>("http://localhost:8763/user/getResult/"+ id);
  }
 
//----------------------------------------------------------

getUserProfile(u:string): Observable<any>{
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<Test>("http://localhost:8763/user/getProfile/"+ u);
}
getResultReport(id:number){
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.get<Userdata>("http://localhost:8763/user/getReport/"+ id);
}
  
  

  //admin------------------------------------------------------------------------
  public assignTestUser(uid: number,tid:number) {
    console.log("ins service assign test to user");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8762/admin/user/"+uid+"/"+tid,  { headers, responseType: 'text'});
  }
  assuid: Userdata;
  public assign(assuid: Userdata) {
    this.assuid = assuid;
  }
  public assignMethod() {
    return this.assuid;
  }

  public assignTestQuestion(tid: number,qid:number):Observable<any> {
    console.log("ins service assign test to question");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8762/admin/test/"+tid+"/"+qid,  { headers, responseType: 'text'});
  }
  assqid: Questions;
  public assignQtoT(assqid: Questions) {
    this.assqid = assqid;
  }
  public assignQtoTMethod() {
    return this.assqid;
  }


  public sendingChoosenValues(ans:any[],tid:number) {
    console.log("ins service send choosen options to backend");
    console.log(ans);
    console.log(tid);
    const headers =new HttpHeaders().set('Content_Type', 'application/json ;charset=utf-8');
    return this.httpService.put("http://localhost:8763/user/choosenAns/"+tid,ans,  { headers, responseType: 'text'});
  }


}
export class Userdata{
  userid:number;
  username:string;
  userType:string;
  userPassword:string;
  userPhoneno:number;
  userEmail:string;
  usertest:Test;
}
export class Questions{
  questionId:number;
  questionTitle:string;
  optionOne:string;
  optionTwo:string;
  optionThree:string;
  optionFour:string;
  rightAnswer:string;
  questionMarks:number;
  choosenAnswer:string;
  marksScored:number;
  test:Test;
}
export class Test{
  testId:number;
  testTitle:string;
  testTotalMarks:number;
  testMarksScored:number;
  testQuestions:any;
}