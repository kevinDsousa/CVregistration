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

  /**
 * Funcção que busca um único usuário através do ID
 * @param id Identificador de usuário
 * @returns Retorna um único usuário
 */
  readById(id: number): Observable<UsersModel> {
    const url = `${this.BASEURL}/${id}`;
    return this.http.get<UsersModel>(url);
  }


  /**
   * Atualiza o usuário
   * @param id identificador de usuario
   * @param data Dados a serem alterados
   * @returns Retorna um observable passando os dados para o backend
   */
  update(id: number, data: UsersModel): Observable<UsersModel> {
    const url = `${this.BASEURL}/${id}`;
    return this.http.patch<UsersModel>(url, data);
  }

  /**
   * Deleta usuário
   * @param id identificador de usuario
   * @returns Retorna um observable passando id para deletar
   */
  delete(id: number): Observable<UsersModel> {
    const url = `${this.BASEURL}/${id}`;
    return this.http.delete<UsersModel>(url);
  }
}
