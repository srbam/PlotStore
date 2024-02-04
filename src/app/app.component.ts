import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { VideoPlaybackService } from './services/video-playback.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  constructor(private router: Router, private videoPlaybackService: VideoPlaybackService) {}
  videoLoaded: boolean = false;
  ngOnInit(): void {
    this.videoLoaded = true;
  }

  loadVideo(){
    this.videoLoaded = true;
    console.log(this.videoLoaded);
  }
}
