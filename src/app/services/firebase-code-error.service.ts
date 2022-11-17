import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {
    switch (code) {
      //El correo ya existe
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';

      //Contraseña débil
      case 'auth/weak-password':
        return 'La contraseña es muy debil';

      //Correo inválido
      case 'auth/invalid-email':
        return 'Correo inválido';

      //Contraseña incorrecta
      case 'auth/wrong-password':
        return 'Contraseña incorrecta';

      //Usuario no existe
      case 'auth/user-not-found':
        return 'El usuario no existe';

      default:
        return 'Error desconocido';
    }
  }
}
