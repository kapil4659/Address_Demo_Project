import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/domain/Address';
import { AddressCrudService } from 'src/app/services/address-crud.service';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.css']
})
export class AddNewAddressComponent implements OnInit {
  result: boolean =false;
  address : Address = new Address();
  submitted: boolean = false;
  constructor(
    private addressCrudService : AddressCrudService , 
    private router : Router) { }

  ngOnInit(): void {
  }
  addNewAddress(){
    console.log("addNewAdress()");
    console.log(this.address);    
    this.addressCrudService.addNewAddress(this.address).subscribe(
      data => {
        this.result = data;
        console.log(this.result);
        this.submitted = true;
      }
    );
  }
  backtohome(){
    console.log("backtohome()");
    this.router.navigate([''])
  }
  
} 