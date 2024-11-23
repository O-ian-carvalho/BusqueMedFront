import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-blue',
  standalone: true,
  imports: [],
  templateUrl: './botao-blue.component.html',
  styleUrl: './botao-blue.component.css'
})
export class BotaoBlueComponent {
    @Input() Titulo:string = "botão"
}
