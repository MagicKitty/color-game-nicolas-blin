import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { CaseComponent } from './case/case.component';
import { GameRoutingModule } from './game-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewComponent, CaseComponent],
  imports: [CommonModule, GameRoutingModule, FormsModule, ReactiveFormsModule],
})
export class GameModule {}
