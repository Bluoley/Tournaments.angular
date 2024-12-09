import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { GameService } from '../../services/game.service';
import { Game } from '../../services/types/Games';
import { MatDialogRef } from '@angular/material/dialog';
import { TEXT_NUMBER, TEXT_ONLY } from '../../../utils/regexp';
import { CanComponentDeactivate } from '../../guards/form-deactivate.guard';

@Component({
  selector: 'app-dialog-tournament-managment',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-tournament-managment.component.html',
  styleUrl: './dialog-tournament-managment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogTournamentManagmentComponent
  implements OnInit, CanComponentDeactivate
{
  readonly dialogRef = inject(MatDialogRef<DialogTournamentManagmentComponent>);
  dataGames: Game[] | undefined;

  tournamentForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.pattern(TEXT_ONLY),
    ]),
    game: new FormControl(null, [
      Validators.required,
      Validators.pattern(TEXT_ONLY),
    ]),
    ubication: new FormControl(null, [
      Validators.required,
      Validators.pattern(TEXT_NUMBER),
    ]),
    date: new FormControl(null, [Validators.required]),
    imgUrl: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [
      Validators.required,
      Validators.pattern(TEXT_NUMBER),
    ]),
    status: new FormControl(1),
  });

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getAllGames();
  }

  createTournament() {
    console.log(this.tournamentForm.valid);
    this.dialogRef.close({ tournament: this.tournamentForm.value });
  }

  canDeactivate(): boolean {
    if (this.tournamentForm.dirty) {
      return confirm(
        'Tienes cambios sin guardar. ¿Estás seguro de que quieres cerrar el formulario?'
      );
    }
    return true;
  }

  getAllGames() {
    this.dataGames = this.gameService.getAllGames();
  }

  closeDialog() {
    if (this.canDeactivate()) {
      this.dialogRef.close();
    }
  }
}
