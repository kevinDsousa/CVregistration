import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { UsersModel } from '../models/users.model';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public readonly BASEURL = `${environment.BASEURL}/user`

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  /**
   * Função modelo injectable que recebe uma mensagem e retornar um snackbar
   * @param msg Mensagem para passar via injectable
   */
  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  /**
   * Função que cria um usuário atraves de um observable
   * @param user Objeto usuário
   * @returns Retorna um observable modelo users
   */
  create(user: UsersModel): Observable<UsersModel> {
    return this.http.post<UsersModel>(this.BASEURL, user);
  }

  /**
   * Função com verbo get para pegar usuários do backend
   * @returns Retona uma lista de usuários
   */
  read(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(this.BASEURL);
  }
}
