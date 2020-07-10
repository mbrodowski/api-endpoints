import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {VersionDiffService} from '../../services/version-diff.service';
import {MainJson} from '../../model/main-json';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  panelOpenState = false;
  jsonData: any = null;
  constructor(public dialog: MatDialog, public diffVersion: VersionDiffService, public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ json: MainJson }>('../assets/jsonData/tmp.json').subscribe( (data) => {
      this.jsonData = data;
    });
  }
  getDiff(name, version) {
    this.diffVersion.getJsonDiff(name, version);
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
