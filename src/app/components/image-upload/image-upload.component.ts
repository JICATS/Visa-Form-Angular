
import { Component,Output,EventEmitter,  OnInit} from '@angular/core';
import{Passenger} from '../../Passenger';






@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  @Output() onAddPassenger: EventEmitter<Passenger> = new EventEmitter(); 

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null as any;
  SaveFile:string="";
  name : string="";
  lastName: string="";
  identification: string="";
  passport: string="";
  country: string="";
  nacionality: string="";
  gendre: string="";
  birthday: string="";
  issueDate: string="";
  expireDate: string="";
  
  binName:string="";
  binLastName: string="";
  binIdentification: string="";
  binPassport: string="";
  binCountry: string="";
  binNacionality: string="";
  binGendre: string="";
  binBirthday: string="";
  binIssueDate: string="";
  binExpireDate: string="";
  
  
  
  
  
  
 

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }
  handleFileInput(file:FileList){
    this.fileToUpload = file.item(0) as File;
    //show image preview
    var reader = new FileReader();
    reader.onload= (event:any)=>{
      this.imageUrl= event.target.result;
      
      
    }
    reader.readAsDataURL(this.fileToUpload);
    
    

  }
  ver(){
    const {imageUrl,SaveFile,name,lastName,identification,passport,country,nacionality,gendre,birthday,issueDate,expireDate}=this
    const newPassenger= {imageUrl:this.imageUrl,SaveFile,name:this.binName,lastName:this.binLastName,identification:this.binIdentification,passport:this.binPassport,country:this.binCountry,nacionality:this.binNacionality,gendre:this.binGendre,birthday:this.binBirthday,issueDate:this.binIssueDate,expireDate:this.binExpireDate}

    this.onAddPassenger.emit(newPassenger);
    
  }
  
  
  
  
  
  
  

}
