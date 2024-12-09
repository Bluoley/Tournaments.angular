import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTournamentManagmentComponent } from './dialog-tournament-managment.component';

describe('DialogTournamentManagmentComponent', () => {
  let component: DialogTournamentManagmentComponent;
  let fixture: ComponentFixture<DialogTournamentManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogTournamentManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTournamentManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
