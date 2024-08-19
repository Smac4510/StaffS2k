import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import { Router, RouterLink} from '@angular/router';


export interface customer {
  id: any;
  image: any;
  name: string;
  phoneno: any;
  address: string;
  email: string;
}

const ELEMENT_DATA: customer[] = [
  {id: 1, image: 'hi', name: 'Minerva', phoneno: '0965-873-6756', address: '234 NW Bobcat Lane, St. Robert', email: ''},
  {id: 2, image: 'hi', name: 'Carlo', phoneno: '0965-873-6756', address: 'Ullamcorper. Street, Roseville, NH', email: ''},
  {id: 3, image: 'hi', name: 'Rivera', phoneno: '0965-873-6756', address: 'Sodales Av., Tamuning, PA', email: ''},
  {id: 4, image: 'hi', name: 'Borso', phoneno: '0965-873-6756', address: 'Integer Rd., Corona, New Mexico', email: ''},
  {id: 5, image: 'hi', name: 'Piolo', phoneno: '0965-873-6756', address: 'Dolor. Av., Muskegon, KY', email: ''},
  {id: 6, image: 'hi', name: 'Carinne', phoneno: '0965-873-6756', address: 'Tortor. Street, Santa Rosa, MN', email: ''},
  {id: 7, image: 'hi', name: 'Timothy', phoneno: '0965-873-6756', address: 'Nunc Road, Lebanon, KY', email: ''},
  {id: 8, image: 'hi', name: 'Kyle', phoneno: '0965-873-6756', address: 'Viverra. Avenue, Latrobe, DE', email: ''},
  {id: 9, image: 'hi', name: 'Joshua', phoneno: '0965-873-6756', address: 'Lacinia Avenue,Idaho Falls, Ohio', email: ''},
  {id: 10, image: 'hi', name: 'Qwuoro', phoneno: '0965-873-6756', address: 'Ullamcorper Avenue, Amesbury, HI', email: ''},
];

@Component({
  selector: 'app-view-customer',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, FormsModule, MatRippleModule, MatPaginatorModule],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})



export class ViewCustomerComponent implements AfterViewInit{
  constructor(
    private route: Router
  ){}
  selectedValue: any;
  options = [
    { value: 5, viewValue: '5' },
    { value: 10, viewValue: '10' },
    { value: 25, viewValue: '25' },
    { value: 100, viewValue: '100'}
  ];
  choiceValuePick: any;
  

  
  pageOption: any[] = [5,10,25,100];
  pagesize: any;
  value: any = '';

  displayedColumns: string[] = ['id', 'image', 'name', 'phoneno', 'address', 'email'];
  dataSource = new MatTableDataSource<customer>(ELEMENT_DATA);
  filteredValue = this.dataSource.data;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.paginator.pageSize = this.pagesize;
    // this.paginator.pageSizeOptions = this.pageOption;
    this.onValueChange;
    console.log(this.pagesize);
    
  }

  onValueChange(choiceValue: any){
    // console.log(choiceValue);
    // this.choiceValuePick = choiceValue;

    const target = choiceValue.target as HTMLSelectElement;
    this.selectedValue = target.value;
    console.log('Selected value:', this.selectedValue);

    // this.dataSource.paginator = this.paginator;
    // this.pagesize = this.selectedValue;
    console.log(this.selectedValue)
    if(this.selectedValue == 5){
      this.pagesize = this.pageOption[0];

    }else if (this.selectedValue == 10){
      this.pageOption[1];
      
    }else if (this.selectedValue == 25){
      this.pagesize = this.pageOption[2];
    }else if (this.selectedValue == 100){
      this.pagesize = this.pageOption[3];
    }else{
      this.pagesize = this.pageOption[1];
    }


    console.log(this.paginator.pageSize)
  }

  onPageChange(event: any) {
    console.log('Page event:', event);
    console.log('5');
  }

  ngOnInit() {
    this.filteredValue = this.dataSource.data;
    this.dataSource.paginator = this.paginator;
    this.onValueChange;
    // this.paginator = this.paginator.pageSize
    // console.log(this.dataSource.paginator.pageSize)
  }
  applyFilter(filterval: any) {
    // const filterValue = (event.target as HTMLInputElement).value;
    this.value = filterval.trim().toLowerCase();
    this.dataSource.filter = this.value;
    this.filteredValue = this.dataSource.filteredData;
  }

  clear(): void{
    this.value = '';
    this.dataSource.filter = '';
    this.filteredValue = this.dataSource.data;
  }

  clickData(){
    this.route.navigate(['./mainpage/Customers/CustomerPage/ViewTransactions'])
  }
}
