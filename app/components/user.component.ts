import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Address: </strong>{{address.street}}, {{address.city}}, {{address.canton}}</p>
    <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : " Show Hobbies"}}</button>
    <div *ngIf="showHobbies">
      <h3>Hobbies</h3>
      <ul>
        <li *ngFor="let hobby of hobbies">
          {{hobby}} </li>
      </ul>
    </div>
    <form>
      <label>Name: </label><br />
      <input type="text" name="name" [(ngModel)]="name" />
    </form>
    `,
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor(){
    console.log('constructor ran');
    this.name = 'Coucou';
    this.email = 'coucou@example.com';
    this.address = {
      street: '12 Main street',
      city: 'Lausanne',
      canton: 'Vaud'
    };
    this.hobbies = ['Music', 'Movies', 'Code'];
    this.showHobbies = false;
  }

  toggleHobbies(){
    console.log('hobbies');
    if (this.showHobbies === true){
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }
}

interface address {
  street: string;
  city: string;
  canton: string;
}
