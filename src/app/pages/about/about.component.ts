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
      description: 'Yo soy la Lider de Gestíón de Marketing, me encarga de crear las estraregias de ventas de nuestros productos y llevarla a la mayor cantidad de lugares posibles donde los Zombies puedan atacar, en mis tiempos libres me gusta disfrutar de la playa y sus bellos atardeceres.',
      hashtags: ['#beachlover', '#sunset', '#ContraLosZombies'],
      coverPath: 'assets/images/about/ivette/cover.png',
      avatarPath: 'assets/images/about/ivette/avatar.png'
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
      description: 'Brains!!!!!!!, hola zombies, mi nombre es Alexis, y me encargo del apoyo digital dentro de la compañia para la generacion de productos contra Zombies, Zombies Preparence!!!!!!!',
      hashtags: ['#Moungtain', '#ContraLosZombies', '#Señor', '#Climber'],
      coverPath: 'assets/images/about/alexis/cover.png',
      avatarPath: 'assets/images/about/alexis/avatar.png'
    },
    {
      name: 'Edgar Mejía',
      username: '@edgarMmejia',
      description: 'Hola mundo! Soy Edgar, actualmente me encargo del desarrollo de la tienda en linea de Zombie Repelent, me gustan los videojuegos, los gatos y muchas cosas más que ya no recuerdo.',
      hashtags: ['#Dev', '#Music', '#Cats'],
      coverPath: 'assets/images/about/edgar/cover.jpg',
      avatarPath: 'assets/images/about/edgar/avatar.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
