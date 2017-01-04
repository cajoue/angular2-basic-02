import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
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
