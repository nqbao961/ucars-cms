import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  exports: [MatSnackBarModule, MatDialogModule, DialogModule],
})
export class MaterialModule {}
