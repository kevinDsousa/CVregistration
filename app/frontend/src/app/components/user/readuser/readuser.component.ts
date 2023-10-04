import { Component, OnInit } from '@angular/core';
import { UsersModel } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-readuser',
  templateUrl: './readuser.component.html',
  styleUrls: ['./readuser.component.css']
})
export class ReaduserComponent implements OnInit{
  user: UsersModel[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'admin', 'action'];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.read().subscribe(user => {
      this.user = user;
    })
  }


}
