import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatSuffix} from "@angular/material/form-field";
import {AuthService} from "../service/auth.service";
import {User, user} from "@angular/fire/auth";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatIcon,
    MatSuffix,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})


export class MainComponent implements AfterViewInit {

  user: User | null = null;

  isPrfImgClicked :boolean= false




  @ViewChild("profile_image")
  private profileImage?: ElementRef<HTMLInputElement>;

  constructor(protected authService: AuthService) {
    this.user = authService.getPrinciple()

  }

  ngAfterViewInit(): void {

  }


}

