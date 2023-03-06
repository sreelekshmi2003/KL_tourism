import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { district } from 'src/assets/data'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(public router : Router){
  
  }
  districts: any;
  ngOnInit(){
    this.districts = district;
  }

  goTo(id:any){
    localStorage.setItem("title",id);
    this.router.navigate(['/single']);
  }

}
