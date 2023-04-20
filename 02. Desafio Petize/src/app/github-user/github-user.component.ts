import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss']
})
export class GithubUserComponent {

  username: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  getUser(username: string) {
    this.http.get(`https://api.github.com/users/${username}`).subscribe(response => {
      console.log(response);
      this.router.navigate(['/perfil'], { queryParams: { user: JSON.stringify(response) } });
    }, error => {
      console.error(error);
    });
  }
}
