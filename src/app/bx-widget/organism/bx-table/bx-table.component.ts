import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataServiceService } from '../../../bx-core/data-service.service';


@Component({
  selector: 'app-bx-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-table.component.html',
  styleUrl: './bx-table.component.scss'
})
export class BxTableComponent {

  data: any[] = [];
  loading = false;
  start = 0;
  end = 20; // Initial range

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.dataService.getData(this.start, this.end).subscribe((response: any[]) => {
      this.data = this.data.concat(response); // Append new data
      this.loading = false;
      console.log(this.data);
      
    });
  }

  onScroll() {
    // Fetch more data when user scrolls to the bottom
    if (!this.loading && this.data.length < this.dataService.totalItems) {
      this.start = this.end;
      this.end += 20; // Increase the range
      this.fetchData();
    }
  }
}
