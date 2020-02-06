import { Component, OnInit, ViewChild} from '@angular/core';
import {Client} from '../../client'
import {UserService} from '../../services/user/user.service'
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component'
import {MainDialogComponent} from '../../main-dialog/main-dialog.component'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['avatar','id', 'name','actions'];
  dataSource:MatTableDataSource<Client>
  showSpinner:boolean = false

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService:UserService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.showSpinner = true
    this.userService.getUsers()
    .subscribe(
      (data:any) => {
        this.hiddeSpinner()
        this.dataSource = new MatTableDataSource(data.data)
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  editUser(id:Number){
    this.router.navigate([`edituser/${id}`])
  }

  openDeleteDialog(id:Number){
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '350px',
      height:'200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return
      }     
      this.deleteUser(id)
    });
  }

  deleteUser(id:Number){
    this.showSpinner = true
    this.userService.deleteUserById(id)
    .subscribe(
      (data) => {
        console.log(data)
        this.hiddeSpinner()
        this.filterTable(id)
        this.openDialog("Usuário deletado com sucesso")
      },
      (error) => {
        console.log(error)
        this.hiddeSpinner()
        this.openDialog("Ocorreu um erro")
      }
    )
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterTable(id:Number){
    this.dataSource.data = this.dataSource.data.filter((e) => e.id !== id)
    this.dataSource._updateChangeSubscription(); 
  }

  openDialog(description:string){
    this.dialog.open(MainDialogComponent,{
      data:{description:description}
    })
  }

  hiddeSpinner(){
    setTimeout(() => {
      this.showSpinner = false
    },500)
  }

}
