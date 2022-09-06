import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/domain/Address';
import { AddressCrudService } from 'src/app/services/address-crud.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {
  addressId : number=0;
  address : Address = new Address();
  submitted: boolean = false;
  result: boolean = false;
  constructor(
    private activatedroute : ActivatedRoute,
    private addressCrudService : AddressCrudService,
    private router : Router
  ) { }

  ngOnInit(): void {
    console.log("In Address Details");
    this.addressId = this.activatedroute.snapshot.params['addressId'];
    console.log(this.addressId);
    this.addressCrudService.getSingleAddress(this.addressId).subscribe(
      data => {
        this.address = data;
        console.log(this.address);
      }
    );

  }
  backtohome(){
    console.log("backtohome()");
    this.router.navigate([''])
  }
  updateAddress(){
    this.addressCrudService.updateAddress(this.address).subscribe(
      data => {
        this.result = data;
        this.submitted = true;
      }
    )
  }
}
