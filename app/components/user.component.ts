import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

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
        <li *ngFor="let hobby of hobbies, let i = index">
          {{hobby}} <button (click)="deleteHobby(i)">X</button>
        </li>
      </ul>
      <form (submit)="addHobby(hobby.value)">
        <label>Add Hobby: </label><br />
        <input type="text" #hobby /> <br />
      </form>
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
    <hr />
    <h3>Posts</h3>
    <div *ngFor="let post of posts">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
    </div>
    `,
    providers: [PostsService]
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService){
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

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies(){
    console.log('hobbies');
    if (this.showHobbies === true){
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }

  addHobby(hobby: string){
    console.log(hobby);
    this.hobbies.push(hobby);
  }

  deleteHobby(i: number){
    this.hobbies.splice(i, 1);
  }
}

interface address {
  street: string;
  city: string;
  canton: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
