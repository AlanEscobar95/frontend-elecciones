export class NuevoUsuarioDto{
    id?: number;

    nombre:string;
   
    nombreRol: string;

    apellido:string;

    carrera:string;

    jornada:string;

    correo_electronico: string;
    
    password: string;

    estado_usuario: boolean;

    estado_voto: boolean;

    constructor(nombreRol:string,nombre:string,apellido:string,carrera:string,jornada:string,correo_electronico:string,password:string,estado_usuario:boolean,estado_voto:boolean){
        this.nombre = nombre;
        this.nombreRol = nombreRol;
        this.apellido = apellido;
        this.carrera = carrera;
        this.jornada = jornada;
        this.correo_electronico = correo_electronico;
        this.password = password;
        this.estado_usuario = estado_usuario;
        this.estado_voto = estado_voto;
        }

}