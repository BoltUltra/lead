import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KadoCampusComponent } from './kado-campus.component';

describe('KadoCampusComponent', () => {
  let component: KadoCampusComponent;
  let fixture: ComponentFixture<KadoCampusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KadoCampusComponent]
    });
    fixture = TestBed.createComponent(KadoCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
