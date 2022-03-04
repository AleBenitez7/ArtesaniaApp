import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesaniasComponent } from './artesanias.component';

describe('ArtesaniasComponent', () => {
  let component: ArtesaniasComponent;
  let fixture: ComponentFixture<ArtesaniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtesaniasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtesaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
