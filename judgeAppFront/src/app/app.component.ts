import {Component, Inject} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, Subscription} from "rxjs";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'judgeAppFront';

  public subscriber: Subscription | undefined;

  constructor(private router: Router, @Inject(DOCUMENT) private document: any){ }

  ngOnInit(): void {
    this.subscriber = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      console.log('The URL changed to: ' + event['url'])
      if(event['url']==='/login'){
        this.document.body.classList.remove('bgverde');
        this.document.body.classList.remove('bgblanco');
        this.document.body.classList.remove('bgnegro');
        this.document.body.classList.remove('bgazul');
        this.document.body.classList.remove('bgrojo');
        this.document.body.classList.add('bgblanco');
      }else if(event['url']==='/home-players'){
        this.document.body.classList.remove('bgverde');
        this.document.body.classList.remove('bgblanco');
        this.document.body.classList.remove('bgnegro');
        this.document.body.classList.remove('bgazul');
        this.document.body.classList.remove('bgrojo');
        this.document.body.classList.add('bgnegro');
      }else if(event['url']==='/nuevo-deck'){
        this.document.body.classList.remove('bgverde');
        this.document.body.classList.remove('bgblanco');
        this.document.body.classList.remove('bgnegro');
        this.document.body.classList.remove('bgazul');
        this.document.body.classList.remove('bgrojo');
        this.document.body.classList.add('bgazul');
      }else if(event['url']==='/tusTorneos'){
        this.document.body.classList.remove('bgverde');
        this.document.body.classList.remove('bgblanco');
        this.document.body.classList.remove('bgnegro');
        this.document.body.classList.remove('bgazul');
        this.document.body.classList.remove('bgrojo');
        this.document.body.classList.add('bgrojo');
      }else if(event['url']==='/torneo'){
        this.document.body.classList.remove('bgverde');
        this.document.body.classList.remove('bgblanco');
        this.document.body.classList.remove('bgnegro');
        this.document.body.classList.remove('bgazul');
        this.document.body.classList.remove('bgrojo');
        this.document.body.classList.add('bgverde');
      }
    /*  else{
        this.document.body.classList.remove('bg1');
        this.document.body.classList.add('bg2');
      }

      /nuevo-deck
      /tusTorneos
      /torneo
*/
    });
  }

  ngOnDestroy () {
    this.subscriber?.unsubscribe();
  }


}
