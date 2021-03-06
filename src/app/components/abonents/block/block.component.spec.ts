import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonentComponent } from './abonent.component';

describe('AbonentComponent', () => {
  let component: AbonentComponent;
  let fixture: ComponentFixture<AbonentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
