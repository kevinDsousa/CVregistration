import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersModel } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {

  registerForm!: FormGroup<any>;
  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }

  user!: UsersModel;
  userId: number | undefined;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id: number = +idParam;
      if (!isNaN(id)) {
        this.userId = id;
        this.userService.readById(id).subscribe((user) => {
          this.user = user;
        });
      }
    }
  }

  cancelar() {
    this.router.navigate(['/register']);
  }

  updateCv() {
    if (this.userId !== undefined) {
      this.userService.update(this.userId, this.user).subscribe(() => {
        this.userService.showMessage('Currículo atualizado com sucesso');
        this.router.navigate(['/register']);
      });
    }
  }

  onSubmit() {
    throw new Error('Method not implemented.');
    }
}
