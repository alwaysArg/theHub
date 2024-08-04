import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OusiaPageComponent } from './ousia-page.component';

describe('OusiaPageComponent', () => {
  let component: OusiaPageComponent;
  let fixture: ComponentFixture<OusiaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OusiaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OusiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
