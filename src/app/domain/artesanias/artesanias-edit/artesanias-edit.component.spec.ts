import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesaniasEditComponent } from './artesanias-edit.component';

describe('ArtesaniasEditComponent', () => {
  let component: ArtesaniasEditComponent;
  let fixture: ComponentFixture<ArtesaniasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtesaniasEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtesaniasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
