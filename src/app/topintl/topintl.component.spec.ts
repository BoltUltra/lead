import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopintlComponent } from './topintl.component';

describe('TopintlComponent', () => {
  let component: TopintlComponent;
  let fixture: ComponentFixture<TopintlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopintlComponent]
    });
    fixture = TestBed.createComponent(TopintlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
