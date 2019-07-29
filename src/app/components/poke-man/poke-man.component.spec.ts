import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeManComponent } from './poke-man.component';

describe('PokeManComponent', () => {
  let component: PokeManComponent;
  let fixture: ComponentFixture<PokeManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
