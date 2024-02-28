import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxTableComponent } from './bx-table.component';

describe('BxTableComponent', () => {
  let component: BxTableComponent;
  let fixture: ComponentFixture<BxTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
