import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public selectedImg = 0;

  public img1 = './assets/images/repelent/Repelent_Left.png';

  public img2 = './assets/images/repelent/Repelent_Right.png';

  public img3 = './assets/images/repelent/picante.png';

  public img4 = './assets/images/repelent/chicle.png';

  constructor() { }

  ngOnInit(): void {
  }

  public current(selected:number) {
    this.selectedImg = selected;
  }

}
