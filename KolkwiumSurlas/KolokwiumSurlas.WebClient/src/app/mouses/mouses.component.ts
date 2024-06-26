import { Component } from '@angular/core';
import { MouseResponseDto } from '../models/mouse-response.interface';
import { MouseService } from '../services/mouse.service';


@Component({
  selector: 'app-mouses',
  templateUrl: './mouses.component.html',
  styleUrl: './mouses.component.css'
})
export class MousesComponent {
  public mouses: MouseResponseDto[] = [];
  public isTable: boolean = true;
  constructor(private mousesService: MouseService){
    this.getData();
  }
  private getData():void{
    this.mousesService.get().subscribe({
      next: (res) => {
        console.log('Data received');
        this.mouses=res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  public deleteMouse(id: number): void {
    this.mousesService.delete(id).subscribe({
      next: () => {
        this.getData();
      },
      error: (err) => {
        console.log(err);
      }

    })
  }
  public changeView(): void {
    this.isTable = !this.isTable;
  }
  public onSubmit():void{
    this.getData();
    this.changeView();
  }
}
