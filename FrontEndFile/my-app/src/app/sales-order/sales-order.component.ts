import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {


  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartmentId: string ;
  DepartmentName:string ;

  salesOrder:{ 
    salesOrderId: string,
    noBukti: string,
    tglFaktur: string,
    tglJthTempo: string,
    syaratBayar: string,
    itemName: string,
    grandTotal: 0,

  };


  ngOnInit(): void {
    this.salesOrder = {
      salesOrderId : "0",
      noBukti: "0",
      tglFaktur:"",
      tglJthTempo:"",
      syaratBayar:"",
      itemName:"",
      grandTotal:0
    }

    var items = [
      { namaBarang: "Roti"},
      { namaBarang: "Keju"}
    ];

  }

  addDepartment(){
    this.service.addSalesOrder(this.salesOrder).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};
    this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
