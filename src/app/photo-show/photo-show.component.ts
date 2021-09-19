import {Component, OnInit, Output} from '@angular/core';
import {FetchService} from "../fetch.service";

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  imageUrl: string = "";

  fetchPhoto() {
    this.fetchService.getPhoto().subscribe((response) => {
      this.imageUrl = response.urls.small;
    });
  }

  constructor(private fetchService: FetchService) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  ngOnInit(): void {
  }

}
