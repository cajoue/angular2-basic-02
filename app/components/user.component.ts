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
    <hr />
    <h3>Edit User</h3>
    <form>
      <label>Name: </label><br />
      <input type="text" name="name" [(ngModel)]="name" /> <br />
      <label>Email: </label><br />
      <input type="text" name="email" [(ngModel)]="email" /> <br />
      <label>Street: </label><br />
      <input type="text" name="address.street" [(ngModel)]="address.street" /> <br />
      <label>Street: </label><br />
      <input type="text" name="address.city" [(ngModel)]="address.city" /> <br />
      <label>Street: </label><br />
      <input type="text" name="address.canton" [(ngModel)]="address.canton" /> <br />
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
