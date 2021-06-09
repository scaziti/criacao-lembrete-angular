import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { LembreteService } from './../../services/lembrete.service';
import { Lembrete } from './../../interfaces/lembrete';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {

  public lembretes!: Lembrete[];
  @ViewChild(ErrorMsgComponent) errosMsgComponent!: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.getListaLembretes();
  }

  getListaLembretes(){
    this.lembreteService.getListaLembretes()
      .subscribe((lembretes: Lembrete[]) =>{
        this.lembretes = lembretes;
      }, () => { this.errosMsgComponent.setError('Falha ao buscar lembretes.', true)});
  }

  // Se for bem sucedido, vai chamar a lista de lembretes atualizada sem o id excluido
  deletaLembrete(id: number){
    this.lembreteService.deletaLembrete(id)
      .subscribe(() => {
        this.getListaLembretes();
      }, () => {this.errosMsgComponent.setError('Falha ao deletar lembrete', true)});
  }

  existemLembretes(): boolean{
    return this.lembretes && this.lembretes.length > 0;
  }
}
