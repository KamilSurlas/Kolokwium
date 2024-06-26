import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MouseResponseDto } from '../models/mouse-response.interface';

@Component({
  selector: '[app-mouse-row]',
  templateUrl: './mouse-row.component.html',
  styleUrl: './mouse-row.component.css'
})
export class MouseRowComponent {
  @Input('app-mouse-row') mouse!: MouseResponseDto;
  @Output() toDelete = new EventEmitter<number>;
  public onDeleteClicked():void{
    this.toDelete.emit(this.mouse.id);
  }
}

