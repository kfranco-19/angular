import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {PersonaService} from './service/persona.service';

@Component({
  selector: 'umg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'profesional';

  constructor(private personaService: PersonaService) {

  }

  public onClick(): void {
    console.log('on click');
  }

  ngAfterViewInit(): void {
    console.log('on after view');
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }

  ngOnInit(): void {
    console.log('on init');
    this.personaService
      .personaList(null)
      .subscribe((result) => {
      console.log('RESULTADO:' + JSON.stringify(result));
    });
  }


}
