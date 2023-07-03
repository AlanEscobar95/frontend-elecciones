export class LoginUsuarioDto{
    nombreRol: string;

    nombre: string;

    correo_electronico: string;
    
    password: string;

    constructor(nombreRol: string,nombre:string,correo_electronico: string, password: string){
        this.nombreRol = nombreRol;
        this.nombre = nombre;
        this.correo_electronico = correo_electronico;
        this.password = password;
    }
}