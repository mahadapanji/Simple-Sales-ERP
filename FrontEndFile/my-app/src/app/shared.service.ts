import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44325/api";
// readonly PhotoUrl = "https://localhost:44325//Photos/";

  constructor(private http:HttpClient) { }

  getSalesOrderList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/SalesOrder/simple');
  }

  addSalesOrder(val:any){
    return this.http.post(this.APIUrl+'/SalesOrder/post',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


//   getEmpList():Observable<any[]>{
//     return this.http.get<any>(this.APIUrl+'/Employee');
//   }

//   addEmployee(val:any){
//     return this.http.post(this.APIUrl+'/Employee',val);
//   }

//   updateEmployee(val:any){
//     return this.http.put(this.APIUrl+'/Employee',val);
//   }

//   deleteEmployee(val:any){
//     return this.http.delete(this.APIUrl+'/Employee/'+val);
//   }


//   UploadPhoto(val:any){
//     return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
//   }

//   getAllDepartmentNames():Observable<any[]>{
//     return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
//   }

}
