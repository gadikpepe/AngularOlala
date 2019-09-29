import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from "../business.service";

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.scss']
})
export class GstEditComponent implements OnInit {

  business: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService
  ) { }

  ngOnInit() {
    console.log("PAGE gst-edit");
    this.getBusiness();
  }

  getBusiness() {
    this.route.params.subscribe(params => {
      this.bs.getData(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }

  updateBusiness(person_name, business_name, business_gst_number, city, province) {
    this.route.params.subscribe(params => {
      this.bs
        .updateData(params['id'], { person_name, business_name, business_gst_number, city, province })
        .subscribe(res => {
          // console.log(res);
          this.router.navigateByUrl('/companies');
        });
    })
  }
}
