import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrls: ['./sales-order-list.component.css']
})
export class SalesOrderListComponent implements OnInit {

  constructor(private service:SharedService) { }

  SalesOrderList:any=[];

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  // DepartmentIdFilter:string="";
  // DepartmentNameFilter:string="";
  // DepartmentListWithoutFilter:any=[];
  message = "testhahaha";
  ngOnInit(): void {
    this.refreshDepList();
  }

  aaa(){
      var aaa= "item"
  }

  refreshDepList(){
    this.service.getSalesOrderList().subscribe(data=>{
      this.SalesOrderList=data;
      // this.DepartmentListWithoutFilter=data;
    });
  }
}
