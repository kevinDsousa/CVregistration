import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersModel } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent {
  user!: UsersModel;

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      if (!isNaN(id)) {
        this.userService.readById(id).subscribe(user => {
          this.user = user;
        });
      } else {
        this.userService.showMessage('id invalido')
        return
      }
    } else {
      this.userService.showMessage('id null')
      return
    }
  }

  cancelar(): void {
    this.router.navigate(['/readuser'])
  }
  deleteUser(): void {
    if (this.user && this.user.id !== undefined) {
      this.userService.delete(this.user.id).subscribe(() => {
        this.userService.showMessage('Currículo apagado com sucesso');
        this.router.navigate(['/readuser']);
      });
    } else {
      this.userService.showMessage('Não foi possível apagar o currículo');
    }
  }
}
