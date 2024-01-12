import { Component } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {
  personCardData:any=[
    {
      ticket:"",
      fasttrack:"",
      image:"../../assets/WonderlaImage/wondersplash_quzjll.avif",
      price:"931.36",
      category:"Adult",
      size:''
    },{
      ticket:"",
      fasttrack:"Fast Track",
      image:"../../assets/WonderlaImage/Wondersplash_xmh0qe.avif",
      price:"1862.72",
      category:"Adult Fast Track",
      size:''
    },{
      ticket:"",
      fasttrack:"",
      image:"../../assets/WonderlaImage/Ponytrain_tx20hc.avif",
      price:"745.09",
      category:"Child",
      size:" (85cms-140cms)"
    },{
      ticket:"",
      fasttrack:"Fast Track",
      image:"../../assets/WonderlaImage/Adventures_of_Chikku_nbrkqt.avif",
      price:"1489.84",
      category:"Child Fast Track"
    },{
      ticket:"",
      fasttrack:"",
      image:"../../assets/WonderlaImage/senior-citizen.jpg",
      price:"930",
      category:"Senior Citizen",
      size:'(60+)'
    }
  ]
  specialPersonData:any=[{
    ticket:"specialTicket",
    fasttrack:"",
    image:"../../assets/WonderlaImage/106922887-1628206615260-gettyimages-887132600-as1700__08.webp",
    price:"745",
    category:"College ID Offer",
    size:'(17-22)'
  }]
}
