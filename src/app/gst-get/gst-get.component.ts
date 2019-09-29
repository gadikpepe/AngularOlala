import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
// import { Business } from "../business"; // Weird bug on My VScode
import Business from "../business";


@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.scss']
})
export class GstGetComponent implements OnInit {

  businesses: any = [];
  businus: Business[];

  constructor(private bs: BusinessService) { }

  refresh() {
    // location.reload();
    this.getAllBusiness();
  }

  ngOnInit() {
    console.log("PAGE gst-get");
    this.getAllBusiness();
  }

  getAllBusiness() {
    this.bs
      .getAllData()
      .subscribe(res => {
        this.businesses = res;
      });
  }

  deleteBusiness(id) {
    this.bs.deleteData(id).subscribe(res => {
      // console.log(res);
      this.getAllBusiness();
    });
  }

}
