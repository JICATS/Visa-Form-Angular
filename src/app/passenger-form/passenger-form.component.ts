import { Component, Output, OnInit,EventEmitter} from '@angular/core';
import {PassengerService} from '../services/passenger.service';
import {Passenger} from '../Passenger';



@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {

  
  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null as any;
  SaveFile: string="";
  name : string="";
  lastName: string="hola";
  identification: string="";
  passport: string="";
  country: string="";
  nacionality: string="";
  gendre: string="";
  birthday: string="";
  issueDate: string="";
  expireDate: string="";

  passengers: Passenger[] = [];

  constructor(
    private passengerService: PassengerService
  ) { }

  ngOnInit(): void {
  }
  addPassenger(passenger:Passenger){
    this,this.passengerService.addPassenger(passenger).subscribe((passengers=>
     this.passengers.push(passenger)
      
    ));

    

  }

}
