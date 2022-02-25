import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public heroTeam: Member[] = [
    {
      name: 'Ivette Lara',
      username: '@ivette',
      description: 'Hola! Soy Ivette!!',
      hashtags: ['#Ivette', '#Lara'],
      coverPath: '',
      avatarPath: ''
    },
    {
      name: 'David Perez',
      username: '@david',
      description: 'Hola! Soy David!!',
      hashtags: ['#David', '#Perez'],
      coverPath: '',
      avatarPath: ''
    },
    {
      name: 'Javier Segura',
      username: '@Javier',
      description: 'Hola! Soy Javier!!',
      hashtags: ['#Javier', '#Segura'],
      coverPath: '',
      avatarPath: ''
    },
    {
      name: 'Alexis Gonzalez',
      username: '@Alexis',
      description: 'Hola! Soy Alexis!!',
      hashtags: ['#Alexis', '#Gonzalez'],
      coverPath: '',
      avatarPath: ''
    },
    {
      name: 'Edgar Mejía',
      username: '@edgarMmejia',
      description: 'Hola mundo! Soy Edgar, actualmente me encargo del desarrollo de la tienda en linea de Zombie Repelent, me gustan los videojuegos, los gatos y muchas cosas más que ya no recuerdo.',
      hashtags: ['#Dev', '#Music', '#Cats'],
      coverPath: 'assets/images/cover-edgar.jpg',
      avatarPath: 'assets/images/avatar-edgar.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
