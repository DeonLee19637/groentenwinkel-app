import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GroenteService } from '../groente.service';
import { WinkelService } from '../winkel.service';
import { Winkel } from '../model/winkel';
import { Groente } from '../model/groente';

@Component({
  selector: 'app-bestelformulier',
  templateUrl: './bestelformulier.component.html',
  styleUrls: ['./bestelformulier.component.css']
})
export class BestelformulierComponent implements OnInit {
  bestelForm: FormGroup;
  groenten: (string | number)[][];
  winkels: Winkel[];
  artikel = new Groente();

  constructor(private groenteService: GroenteService, private winkelService: WinkelService, private fb: FormBuilder){}

  get aantal() {
    return this.bestelForm.get('aantal');
  }
  onSubmit() {
    // this.groenteService.addGroenteToMandje().subscribe(groenten => this.groenten = groenten);
  }

  ngOnInit() {
    this.groenteService.getGroenten().subscribe(groenten => this.groenten = groenten);
    this.winkelService.getWinkels().subscribe(winkels => this.winkels = winkels);
    this.bestelForm = this.fb.group({
      naam: ['', [Validators.required]],
      groente: ['', [Validators.required]],
      aantal: ['', [Validators.required, Validators.min(1)]]
    });
  }
}
