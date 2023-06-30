export class Tarea{
 id?: number;
 nombreTarea: string;
 descripcion: string;
 encargado: string;
 fechaInicio: Date;
 fechaFinalizacion: Date;

 
 constructor(nombreTarea: string,descripcion:string, encargado: string, fechaInicio: Date, fechaFinalizacion: Date){
     this.nombreTarea = nombreTarea;
     this.descripcion = descripcion;
     this.encargado = encargado;
     this.fechaInicio = fechaInicio;
     this.fechaFinalizacion = fechaFinalizacion;
     
 }
}
