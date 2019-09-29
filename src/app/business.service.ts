import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  host = "http://localhost:3000";

  uri = {
    getAllData: `${this.host}/business`,
    getData: `${this.host}/business/edit`,
    addData: `${this.host}/business/add`,
    updateData: `${this.host}/business/update`,
    deleteData: `${this.host}/business/delete`,
  }


  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(`${this.uri.getAllData}`);
  }

  getData(id) {
    return this.http.get(`${this.uri.getData}/${id}`);
  }

  addData(payload) {
    console.log(payload);
    return this.http.post(`${this.uri.addData}`, payload);
  }

  updateData(id, payload) {
    return this.http.post(`${this.uri.updateData}/${id}`, payload);
  }

  deleteData(id) {
    return this
      .http
      .get(`${this.uri.deleteData}/${id}`);
  }
}
