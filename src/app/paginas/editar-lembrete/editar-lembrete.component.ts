import { ActivatedRoute, Router } from '@angular/router';
import { Lembrete } from './../../interfaces/lembrete';
import { LembreteService } from './../../services/lembrete.service';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Component, ViewChild} from '@angular/core';


@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent{

  public lembrete!: Lembrete;
  @ViewChild(ErrorMsgComponent) errorMsgComponent!: ErrorMsgComponent;

  constructor(
    private lembreteService: LembreteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getLembrete(this.activatedRoute.snapshot.params.id);
  }

  getLembrete(id: number) {
    this.lembreteService.getLembrete(id)
      .subscribe((lembrete: Lembrete) => {
        this.lembrete = lembrete;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar lembrete.', true) });
  }

  atualizaLembrete(lembrete: Lembrete) {
    this.lembreteService.atualizaLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao atualizar lembrete.', true) });
  }

}
