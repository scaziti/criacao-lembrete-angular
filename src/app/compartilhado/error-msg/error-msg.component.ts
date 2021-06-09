import { Component } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent{

  public error: string = '';
  public controlador: boolean = false;

  // SetError espera dois parametros, incluindo o tempo
  // 5000 Milissegundos = 5 seg
  setError(error: string, controlador: boolean, tempo: number = 5000){
    this.controlador = controlador;
    this.error = error;
    // Qdo chegar em 5 seg. vai transformar em false
    setTimeout(() =>{
      this.controlador = false;
    }, tempo);
  }


}
