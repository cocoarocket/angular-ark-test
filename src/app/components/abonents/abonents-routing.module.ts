import { Routes } from '@angular/router';
import { AbonentsComponent} from './abonents.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { BlockComponent } from './block/block.component';

export const routes: Routes = [
  { path: '', redirectTo: 'abonents', pathMatch: 'full' },
  { path: 'abonents', component: AbonentsComponent,
    children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'main',  component: MainComponent },
      { path: 'table', component: TableComponent },
      { path: 'block', component: BlockComponent }
    ]
  }
];
