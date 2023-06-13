export class Cronograma {
 id?: number;
 nomTarea: string;
 encargado: string;
 fechaIni: Date;
 fechaFin: Date;

 
 constructor(nomTarea: string, encargado: string, fechaIni: Date, fechaFin: Date){
     this.nomTarea = nomTarea;
     this.encargado = encargado;
     this.fechaIni = fechaIni;
     this.fechaFin = fechaFin;
     
 }
}
