import { Component } from '@angular/core';
import { Post } from './nodeMdulesPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RipassoInterrogazione';
  posts !: Post[];
  invia(nome: HTMLInputElement, testo: HTMLInputElement): boolean {
  this.posts.push(new Post(nome.value, testo.value));
  return false
  }
}
