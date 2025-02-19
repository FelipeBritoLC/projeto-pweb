import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProdutoService } from '../produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-inserir',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './produto-inserir.component.html',
  styleUrls: ['./produto-inserir.component.css']
})
export class ProdutoInserirComponent {
  produto = { nome: '', preco: 0 };

  constructor(private produtoService: ProdutoService) { }

  onSubmit() {
    this.produtoService.addProduto(this.produto).subscribe(() => {
      alert('Produto adicionado com sucesso!');
      this.produto = { nome: '', preco: 0 };
    });
  }
}