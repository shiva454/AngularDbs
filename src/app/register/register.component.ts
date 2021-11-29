import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private dataSvc:DataService) {
  
    this.countries=this.dataSvc.getCountryList();
      
  }
  ngOnInit(): void {}
  register ={
    email:"",
    phone:"",
    username:"",
    password:"",
    confirmPassword:"",
    age:"",
    gender:"",
    country:"",
    agreeTerms:false
  }
  countries=[
    { name:"India",countryCode:"IN"},
    { name:"United States",countryCode:"USA"}]
  registerUser(){
    console.log(this.register);
  }
}