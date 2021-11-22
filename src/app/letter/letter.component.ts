import { Component, Input } from '@angular/core';

export interface ILetter {
  title: string,
  isSelect: boolean
}

@Component({
  selector: 'letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent {
    @Input() letter: string;
}
