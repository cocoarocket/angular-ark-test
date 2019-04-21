import { Routes } from '@angular/router';
import { AbonentsComponent} from './abonents.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { BlockComponent } from './block/block.component';
import { AbonentComponent } from './abonent/abonent.component';

export const routes: Routes = [
  { path: '', redirectTo: 'abonents', pathMatch: 'full' },
  { path: 'abonents', component: AbonentsComponent,
    children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'main',  component: MainComponent },
      { path: 'block',  component: BlockComponent },
      { path: 'table', component: TableComponent,
        children: [
          { path: ':id' , component: AbonentComponent }
        ]
      }
    ]
  }
];
