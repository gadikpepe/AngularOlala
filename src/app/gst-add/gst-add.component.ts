import { Component, OnInit } from '@angular/core';
import { BusinessService } from "../business.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.scss']
})
export class GstAddComponent implements OnInit {


  constructor(private router: Router, private bs: BusinessService) { }

  ngOnInit() {
    console.log("Component gst-add")
  }

  addBusiness(person_name, business_name, business_gst_number, city, province) {
    this.bs
      .addData({ person_name, business_name, business_gst_number, city, province })
      .subscribe(res => {
        // console.log(res);
        this.router.navigateByUrl('/companies');
      });
  }

}
