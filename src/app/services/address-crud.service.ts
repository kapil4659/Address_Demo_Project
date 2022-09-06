import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../domain/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressCrudService {
  private baseUrl : string = "http://localhost:8080/addressapi/address";
    
  constructor(private httpClient: HttpClient) {    }
  
  getAllAddress(): Observable<Address[]>{
    console.log("in getAllAddress");
       
    return this.httpClient.get<Address[]>(this.baseUrl+"/all");
  }
  addNewAddress(address : Address) : Observable<boolean> {
    console.log("In Service addNewAddress");
    console.log(address);
    return this.httpClient.post<boolean>(this.baseUrl, address)
  }
  deleteAddressByAddressId(addressId: number) : Observable<boolean>{
    console.log("in deleteAddressBYAddressId");
    console.log(addressId);
    return this.httpClient.delete<boolean>(this.baseUrl+"/"+addressId)
  }
  getSingleAddress(addressId: number): Observable<Address>{
    return this.httpClient.get<Address>(this.baseUrl+"/"+addressId);
  }
  updateAddress(address : Address) : Observable<boolean> {
    console.log("In Service ");
    console.log(address);
    return this.httpClient.put<boolean>(this.baseUrl, address)
  }
}
