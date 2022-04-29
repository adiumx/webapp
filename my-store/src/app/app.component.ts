import { Component } from '@angular/core';
import { Product } from './product.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  register={
    name: '',
    email: '',
    password: '',
  }
  name = 'Nicolas';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  box={
    width: 100,
    height: 100,
    background: 'red'
  };
  products: Product[]= [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/dinosaurio.jpeg'
    },
    {
      name: 'El mejor oso',
      price: 565,
      image: './assets/images/oso.jpeg'
    }

  ]
  constructor(){

  }

  title = 'my-store';
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  onRegister(){
    console.log(this.register)
  }
  onSubmit(value: any){
    console.log(value);
  }
}

