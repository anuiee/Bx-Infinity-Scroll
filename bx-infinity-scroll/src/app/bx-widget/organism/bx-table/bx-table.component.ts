import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DataServiceService } from '../../../core/data-service.service';

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
  stepSize = 20; // Number of items to load per step
  @ViewChild('tableContainer') tableContainer!: ElementRef;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.dataService.getData(this.start, this.start + this.stepSize).subscribe((response: any[]) => {
      this.data = this.data.concat(response); // Append new data
      this.loading = false;
      this.start += this.stepSize; // Update start index for the next chunk
      console.log(this.data);
      
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.bottomReached() && !this.loading) {
      this.fetchData();
    }
  }

  bottomReached(): boolean {
    const container = this.tableContainer.nativeElement;
    const scrollTop = container.scrollTop || document.documentElement.scrollTop;
    const scrollHeight = container.scrollHeight || document.documentElement.scrollHeight;
    const clientHeight = container.clientHeight || document.documentElement.clientHeight;
    return scrollTop + clientHeight >= scrollHeight;
  }
}
