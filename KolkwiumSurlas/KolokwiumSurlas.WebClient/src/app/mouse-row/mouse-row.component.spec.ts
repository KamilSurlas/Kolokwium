import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseRowComponent } from './mouse-row.component';

describe('MouseRowComponent', () => {
  let component: MouseRowComponent;
  let fixture: ComponentFixture<MouseRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MouseRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MouseRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
