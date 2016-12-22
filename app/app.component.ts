import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Address: </strong>{{address.street}}, {{address.city}}, {{address.canton}}</p>
    `,
})
export class AppComponent  {
  name = 'Coucou';
  email = 'coucou@example.com';
  address = {
    street: '12 Main street',
    city: 'Lausanne',
    canton: 'Vaud'
  };
}
