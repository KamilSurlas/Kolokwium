import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MouseRequestDto } from '../models/mouse-request.interface';
import { MouseService } from '../services/mouse.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() submit = new EventEmitter<void>();
  public object: MouseRequestDto = {
    model: null!,
    dpi: null!
  }
  private readonly api = inject(MouseService);

  public onSubmit(event: any):void{
    this.api.post(this.object).subscribe({
      next: () => {
        this.submit.emit();
      },
      error: (err) => console.error(err)
    })
  }
}
