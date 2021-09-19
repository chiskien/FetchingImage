import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface photoApi {
  urls: {
    regular: string;
    small: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) {
  }

  getPhoto() {
    return this.http.get<photoApi>("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: "Client-ID jnMQuVHxPJcVzZVGYjjYaZECF_yLpy6REYrmIR_aEcI",
      }
    })
  }
}
