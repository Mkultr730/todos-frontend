import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(private auth: HardcodedAuthenticationService) { }

  ngOnInit(): void {    
  }

  isUserLogged(){
    return this.auth.isUserLoggedIn();
  }

}
