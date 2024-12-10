import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  data = inject(MAT_DIALOG_DATA);
  dataGames: Game[] | undefined;
  addForm!: FormGroup;

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
    description: new FormControl(null, [Validators.required]),
    status: new FormControl(1),
  });

  constructor(private gameService: GameService, private fb: FormBuilder) {
    this.addForm = this.fb.group({
      participants: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.getAllGames();
    if (this.data.type === 'edit') {
      this.tournamentForm.patchValue(this.data.data);
    } else if (this.data.type === 'add') {
      this.addParticipant();
    }
  }

  get participants() {
    return this.addForm.controls['participants'] as FormArray;
  }

  addParticipant() {
    this.participants.push(
      this.fb.group({
        name: ['', Validators.required],
      })
    );
  }

  removeParticipant(index: number) {
    this.participants.removeAt(index);
  }

  createTournament() {
    if (this.data.type === 'edit') {
      let tournamentEdited = {
        ...this.data.data,
        ...this.tournamentForm.value,
      };
      this.dialogRef.close({ tournament: tournamentEdited });
    } else if (this.data.type === 'add') {
      this.addForm.value.participants.forEach((element: any) => {
        this.data.data.listParticipants.push(element.name);
      });
      this.dialogRef.close({ tournament: this.data.data });
    } else {
      this.dialogRef.close({ tournament: this.tournamentForm.value });
    }
  }

  canDeactivate(): boolean {
    if (this.tournamentForm.dirty || this.addForm.dirty) {
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
