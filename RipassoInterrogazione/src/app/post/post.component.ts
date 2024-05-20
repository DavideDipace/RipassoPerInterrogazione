import { Component, Input } from '@angular/core';
import { Post } from '../nodeMdulesPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() ciao!: Post[];
  likes : number = 0;
  commenti !: string[];
  
  like(): boolean {
  this.likes += 1;
  return false
  }
  commenta(commento: HTMLInputElement) : boolean {
  this.commenti.push(commento.value);
  return false 
  }
}
