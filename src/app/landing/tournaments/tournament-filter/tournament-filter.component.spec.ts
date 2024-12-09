import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentFilterComponent } from './tournament-filter.component';

describe('TournamentFilterComponent', () => {
  let component: TournamentFilterComponent;
  let fixture: ComponentFixture<TournamentFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
