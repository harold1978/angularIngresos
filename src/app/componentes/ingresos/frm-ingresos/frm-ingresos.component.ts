import { Component } from '@angular/core';
import { Iingresos } from '../../../interfaces/iingresos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-frm-ingresos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './frm-ingresos.component.html',
  styleUrl: './frm-ingresos.component.css'
})
export class FrmIngresosComponent {
  ingresos:Iingresos[]=[];

  nuevoingreso:Iingresos={id:"",nombre:"",fecha:"",monto:0};

  agregaIngreso(){
    if(this.nuevoingreso.id==""){
      alert("COMPLETA TODOS LOS DATOS DEL FORMULARIO");
      return;
    }
    const item = this.ingresos.find(item=>item.id==this.nuevoingreso.id);
    if(item){
      const indice = this.ingresos.indexOf(item);
      this.ingresos.splice(indice,1,this.nuevoingreso);
      alert("ELEMENTO ACTUALIZADO");
      return;
    }
    this.ingresos.push(this.nuevoingreso);
    alert("INGRESO AGREGADO");
  
  }

}
