import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { BURGERS, getBurgerByType } from '../../shared/data/burgers.data';
import { IBurger } from '../../shared/models/burger.model';
import { BurgerType } from '../../shared/config/burger.config';

@Injectable({
  providedIn: 'root'
})
export class BurgersService {

  // query list of burgers
  public query(): Observable<IBurger[]> {
    // should make an API call

    return of(BURGERS);

  }

  // get a burger by id
  public get(burgerId: string) {

  }

  // save burger details
  public post(payload: any) {

  }

  // update burger details
  public put(id: string, payload: any) {

  }

  // delete burger details
  public delete(id: string) {

  }

  public getBurgerByType(burgerType: BurgerType): IBurger {
    return getBurgerByType(burgerType);
  }


}
