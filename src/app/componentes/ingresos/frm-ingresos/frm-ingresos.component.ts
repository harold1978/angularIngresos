import { Component, EventEmitter, Output } from '@angular/core';
import { Iingresos } from '../../../interfaces/iingresos';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frm-ingresos',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './frm-ingresos.component.html',
  styleUrl: './frm-ingresos.component.css'
})
export class FrmIngresosComponent {
  @Output() ingresoAgregado = new EventEmitter<Iingresos>();

  ingresos:Iingresos[]=[];

  nuevoingreso:Iingresos={id:"",nombre:"",fecha:"",monto:0};

  agregaIngreso(){
    const item = this.ingresos.find(item=>item.id==this.nuevoingreso.id);
    if(item){
      const indice = this.ingresos.indexOf(item);
      this.ingresos.splice(indice,1,{...this.nuevoingreso});
      alert("ELEMENTO ACTUALIZADO");
      this.limpiar();
      return;
    }
    //this.ingresos.push({...this.nuevoingreso});
    this.ingresoAgregado.emit({...this.nuevoingreso});
    alert("INGRESO AGREGADO");
    this.limpiar();
  }

  limpiar(){
    this.nuevoingreso.id="";
    this.nuevoingreso.nombre="";
    this.nuevoingreso.fecha="";
    this.nuevoingreso.monto=0;
  }
  editar(id:string):void{
    const aux = this.ingresos.find(item=>item.id==id);
    if(aux){
      this.nuevoingreso={...aux};
    }
  }
  eliminar(id:string){
    this.ingresos = this.ingresos.filter(item=>item.id!==id);
    
  }
}
