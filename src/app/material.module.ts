import { NgModule } from '@angular/core';
import {
  MatNavList,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
} from '@angular/Material';

@NgModule({
  imports: [
  
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule
    ],
  exports: [
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule,
      MatListModule

    ],
})
export class Material { }
export class DemoMaterialModule {}
