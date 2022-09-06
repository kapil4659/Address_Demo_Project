import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/domain/Address';
import { AddressCrudService } from 'src/app/services/address-crud.service';

@Component({
  selector: 'app-all-address',
  templateUrl: './all-address.component.html',
  styleUrls: ['./all-address.component.css']
})
export class AllAddressComponent implements OnInit {
  allAddresses : Address[] = [];
  
  constructor(private addressCrudService : AddressCrudService,
  private router: Router  ) { }

  result = false;
  ngOnInit(): void {
    console.log("in AllAddressComponent");
    this.reloadData();  
  }
  reloadData(){
    this.addressCrudService.getAllAddress().subscribe(
      data => {
      this.allAddresses = data;
      console.log(this.allAddresses);
    }); 
  }
  deleteAddress(addressId : number){
    console.log(addressId);
    this.addressCrudService.deleteAddressByAddressId(addressId).subscribe(
      data => {
        this.result=data;
        this.reloadData() ;
      }
    );
  }
  showDetails(addressId: number){
    console.log("In show Details");
    console.log(addressId);
    this.router.navigate(['addressdetails', addressId]);
  }
  updateAddress(addressId: number){
    console.log("In Update Address");
    console.log(addressId);
    this.router.navigate(['updateaddress', addressId]);
  }
}
