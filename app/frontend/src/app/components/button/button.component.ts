import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  /**
   * Verificação se o botão é primário
   */
  @Input()
  primary = false;

  /**
   * Cor de fundo do botão
   */
  @Input()
  backgroundColor?: string;

  /**
   * Tamanho do botão
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Texto do botão
   */
  textBtn: string | undefined;

  /**
   * Evento de click opcional
   */
  @Output()
  onClick = new EventEmitter<Event>();

}
