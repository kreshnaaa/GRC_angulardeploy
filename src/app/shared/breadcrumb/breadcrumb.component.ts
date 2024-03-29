import { Component, Input } from '@angular/core';
import { BreadcrumbItem } from '../models/breadcrumb.model';
import { UserComponent } from '../../modules/masters/components/user/user.component';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [UserComponent],

  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() mastersText!: string;
}
