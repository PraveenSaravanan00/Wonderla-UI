import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  cardDate: any = [1, 2, 3, 4, 5, 6, 7, 8]
  cardDay: any = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  cardColor: any = ["greenyellow", "red", "orange", 'skyblue', "greenyellow", "red", "orange", 'skyblue']
  smallCard: any = []
  obj: any = {}
  smallCardActive: boolean[] = []
  ngOnInit() {
    // for(let i=0;i<=this.cardDate.length;i++){
    //   const number=this.cardDate[i]
    //   const dayindex=i%this.cardDay.length
    //   const dayName=this.cardDay[dayindex]
    //   this.obj[number]=dayName
    //   this.smallCard.push(this.obj)
    // }
    this.cardDate.forEach((element: any, index: any) => {
      // const number=this.cardDate[index]
      // const dayindex=index%this.cardDay.length
      // const dayName=this.cardDay[dayindex]
      // this.obj[number]=dayName
      // this.smallCard.push(this.obj)
      this.smallCard.push({ date: element, day: this.cardDay[index], color: this.cardColor[index] })
    })
    console.log(this.smallCard);

  }
  smallCardClick(id: number) {
    this.smallCardActive[id] = true
    this.cardDate.forEach((element: number, index: number) => {
      if (id == element) {
        this.smallCardActive.splice(index, 1,false)
      }
    })
  }
}
