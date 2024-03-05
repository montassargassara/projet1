import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TeamServiceService } from '../services/team-service.service';
import { TeamAddEditComponent } from '../team-add-edit/team-add-edit.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { ImageModel, Team } from '../team';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-team-read',
  templateUrl: './team-read.component.html',
  styleUrl: './team-read.component.scss'
})
export class TeamReadComponent implements OnInit {
  selectedFileUrl: any = null;
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'teamImages',
    'action'
  ];
  
  Team?: Team[];
  dataSource!: MatTableDataSource<any>;
  selectedFileName: string | null = null;

  imageFiles: File[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _TeamService: TeamServiceService,
    private _coreService: CoreService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getTeamList();
  }

  openAddEditTeamForm() {
    const dialogRef = this._dialog.open(TeamAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTeamList();
        }
      },
    });
  }

  getTeamList() {
    this._TeamService.getAllTeams().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.error,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteTeam(id: number) {
    this._TeamService.deleteTeam(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Team deleted!', 'done');
        this.getTeamList();
      },
      error: console.error,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(TeamAddEditComponent, {
      data: { Team: data, selectedFileName: data.image ? data.image : null },
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTeamList();
        }
      },
    });
  }

  getImageUrl(image: ImageModel): SafeUrl {
    if (image && image.picByte) {
      const imageUrl = 'data:' + image.type + ';base64,' + image.picByte;
      return this._sanitizer.bypassSecurityTrustUrl(imageUrl);
    }
    return '';
  }

}
