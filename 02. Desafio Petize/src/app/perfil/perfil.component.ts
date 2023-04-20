import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.route.snapshot.queryParams['user']);
    console.log(this.user);
  }
}
