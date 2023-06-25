export class NuevoUsuarioDto{
   

    nombreRol: string;

    nombre:string;

    apellido:string;

    carrera:string;

    jornada:string;

    correo_electronico: string;
    
    password: string;

    constructor(nombreRol:string,nombre:string,apellido:string,carrera:string,jornada:string,correo_electronico:string,password:string){
        this.nombreRol = nombreRol;
        this.nombre = nombre;
        this.apellido = apellido;
        this.carrera = carrera;
        this.jornada = jornada;
        this.correo_electronico = correo_electronico;
        this.password = password;
        }

}