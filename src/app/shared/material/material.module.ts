import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule,
  MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule,
  MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule,
  MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule,
  MatTabsModule, MatListModule, MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule,
    MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule,
    MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule,
    MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule,
    MatTabsModule, MatListModule, MatExpansionModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule,
    MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule,
    MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule,
    MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule,
    MatTabsModule, MatListModule, MatExpansionModule
  ],
})
export class MaterialModule { }
