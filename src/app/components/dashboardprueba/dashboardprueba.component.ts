import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardprueba',
  templateUrl: './dashboardprueba.component.html',
  styleUrls: ['./dashboardprueba.component.css']
})
export class DashboardpruebaComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,
      private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

}
