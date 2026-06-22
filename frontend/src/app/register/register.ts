import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({

selector: 'app-register',

standalone: true,

imports: [FormsModule],

templateUrl: './register.html',

styleUrl: './register.css',

})

export class Register {

nombre = '';

apellido = '';

correo = '';

telefono = '';

password = '';

confirmarPassword = '';

constructor(private http: HttpClient) {}

register() {

if (this.password !== this.confirmarPassword) {

alert('Las contraseñas no coinciden');

return;

}

const body = {

username: this.correo,

password: this.password,

rol: 'CLIENTE'

};

this.http.post(

'http://localhost:8088/auth/register',

body

).subscribe({

next: () => {

alert('Cuenta creada correctamente');

window.location.href = '/login';

},

error: (err) => {

console.error(err);

alert('Error al registrar el usuario');

}

});

}

}
