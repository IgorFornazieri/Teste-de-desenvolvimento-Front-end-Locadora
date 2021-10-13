import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-register',
  templateUrl: './movie-register.component.html',
  styleUrls: ['./movie-register.component.scss']
})
export class MovieRegisterComponent implements OnInit {

  moviesList = [
    {
      "numero": "00000035",
      "titulo": "+VEZELOS + FURIOSOS",
      "valor": "R$: 2.50",
      "data": "06/02/2004"
    },
    {
      "numero": "00000082",
      "titulo": "007 UM NOVO DIA PARA MORRER",
      "valor": "R$: 2.50",
      "data": "10/02/2004"
    },
    {
      "numero": "00000122",
      "titulo": "60 SEGUNDOS",
      "valor": "R$: 2.00",
      "data": "13/02/2004"
    },

  ]

  image: any = "../../../assets/images/D_NQ_NP_714215-MLB25144221941_112016-W.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  async getFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type.indexOf('image') === 0) {
        this.image = await this.toBase64(file);
      }
    }
  }

  toBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

}
