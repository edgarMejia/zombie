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
      description: 'Yo soy la Lider de Gestíón de Marketing, me encargo de crear las estraregias de ventas de nuestros productos y llevarlas a la mayor cantidad de lugares posibles donde los Zombies puedan atacar, en mis tiempos libres me gusta disfrutar de la playa y sus bellos atardeceres.',
      hashtags: ['#beachlover', '#sunset', '#ContraLosZombies'],
      coverPath: 'assets/images/about/ivette/cover.png',
      avatarPath: 'assets/images/about/ivette/avatar.png'
    },
    {
      name: 'David Perez',
      username: '@david',
      description: 'Hola, si llegaste hasta aquí es porque tienes problemas de Zombies! No te preocupes soy David, tu ejecutivo de atención al cliente y te daré todos los consejos de como adquirir nuestro famosísimo repelente contra Zombies, ademas te enseñaré como aplicarlo para obtener los mejores resultados! Puedes usar nuestros canales digitales hoy, mañana, siempre y por los siglos de los siglos!',
      hashtags: ['#David', '#Perez'],
      coverPath: 'assets/images/about/david/cover.jpeg',
      avatarPath: 'assets/images/about/david/avatar.jpeg'
    },
    {
      name: 'Javier Segura',
      username: '@Javier',
      description: 'Bienvenidos Zoombies! \nSoy el Gefe (Gerente de la Felicidad), me encargo de mantener al equipo feliz y contento, lleno de PositiveZ para que destrocemos a los Zombies emos con nuestras carcajadas y ocurrencias. En mis tiempos libres me gusta bajar mangos a pedrada limpia y quemar zoombies en leña :).',
      hashtags: ['#Javier', '#Segura'],
      coverPath: 'assets/images/about/javier/cover.jpeg',
      avatarPath: 'assets/images/about/javier/avatar.jpeg'
    },
    {
      name: 'Alexis Gonzalez',
      username: '@Alexis',
      description: 'Brains!!!!!!!, hola zombies, mi nombre es Alexis, y me encargo del apoyo digital dentro de la compañía para la generación de productos contra Zombies, Zombies Preparence!!!!!!!',
      hashtags: ['#Moungtain', '#ContraLosZombies', '#Señor', '#Climber'],
      coverPath: 'assets/images/about/alexis/cover.png',
      avatarPath: 'assets/images/about/alexis/avatar.png'
    },
    {
      name: 'Edgar Mejía',
      username: '@edgarMmejia',
      description: 'Hola mundo! Soy Edgar, actualmente me encargo del desarrollo de la tienda en linea de Zombie Repelent, me gustan los videojuegos, los gatos y muchas cosas más que ya no recuerdo. GG salu2.',
      hashtags: ['#Dev', '#Music', '#Cats'],
      coverPath: 'assets/images/about/edgar/cover.jpg',
      avatarPath: 'assets/images/about/edgar/avatar.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
