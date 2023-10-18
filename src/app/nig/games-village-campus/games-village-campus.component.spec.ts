import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesVillageCampusComponent } from './games-village-campus.component';

describe('GamesVillageCampusComponent', () => {
  let component: GamesVillageCampusComponent;
  let fixture: ComponentFixture<GamesVillageCampusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesVillageCampusComponent]
    });
    fixture = TestBed.createComponent(GamesVillageCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
