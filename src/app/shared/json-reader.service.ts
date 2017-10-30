import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";


@Injectable()
export class JsonReaderService {

  constructor(public http: Http) {
  }

  getJsonData(pathToJson: string) {
    return this.http.get(pathToJson)
      .map((res: Response) => res.json());
    //.map((res: Response) => res.json().YOUR_JSON_HEADER); //records in this case
  }
}
