import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p>
      Hola mundo ... Esta es una etiqueta
    </p>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
