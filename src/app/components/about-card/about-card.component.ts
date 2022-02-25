import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {

  @Input() name = 'Juan Perez';

  @Input() username = '@nance';

  @Input() description = 'Hola! Soy Juan Perez!';

  @Input() hashtags = ['#ACE', '#AES', '#ESA'];

  @Input() coverPath = 'https://bulma.io/images/placeholders/1280x960.png';

  @Input() avatarPath = 'https://bulma.io/images/placeholders/96x96.png';

  constructor() { }

  ngOnInit(): void {
    if (!this.coverPath) {
      this.coverPath = 'https://bulma.io/images/placeholders/1280x960.png';
    }

    if (!this.avatarPath) {
      this.avatarPath = 'https://bulma.io/images/placeholders/96x96.png';
    }
  }

}
