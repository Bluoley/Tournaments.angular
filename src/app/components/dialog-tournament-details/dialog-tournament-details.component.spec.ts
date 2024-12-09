import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTournamentDetailsComponent } from './dialog-tournament-details.component';

describe('DialogTournamentDetailsComponent', () => {
  let component: DialogTournamentDetailsComponent;
  let fixture: ComponentFixture<DialogTournamentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogTournamentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTournamentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
