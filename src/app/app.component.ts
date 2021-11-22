import { Component } from '@angular/core';

export interface ILetter {
  title: string,
  isSelect: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  letters1: ILetter[] = [
    {title: 'А', isSelect: true},
    {title: 'Б', isSelect: false},
    {title: 'В', isSelect: false},
    {title: 'Г', isSelect: false},
    {title: 'Д', isSelect: false},
    {title: 'Е', isSelect: false},
    {title: 'Ж', isSelect: false},
    {title: 'З', isSelect: false},
    {title: 'И', isSelect: false},
    {title: 'К', isSelect: false},
    {title: 'Л', isSelect: false},
    {title: 'М', isSelect: false},
    {title: 'Н', isSelect: false},
    {title: 'О', isSelect: false}
  ];
  letters2: ILetter[] = [
    {title: 'П', isSelect: false},
    {title: 'Р', isSelect: false},
    {title: 'С', isSelect: false},
    {title: 'Т', isSelect: false},
    {title: 'У', isSelect: false},
    {title: 'Ф', isSelect: false},
    {title: 'Х', isSelect: false},
    {title: 'Ц', isSelect: false},
    {title: 'Ч', isSelect: false},
    {title: 'Ш', isSelect: false},
    {title: 'Щ', isSelect: false},
    {title: 'Э', isSelect: false},
    {title: 'Ю', isSelect: false},
    {title: 'Я', isSelect: false},
  ];
  currentLetter: ILetter = this.letters1[0];
  changeLetter(letter: ILetter) {
    this.currentLetter = letter;
  }
}
