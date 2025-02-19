import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from './produto.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Objeto para armazenar os dados do novo produto
  novoProduto = { nome: '', preco: 0 };

  // Lista de produtos
  produtos: any[] = [];

  // Colunas da tabela
  colunas: string[] = ['nome', 'preco'];

  constructor(private produtoService: ProdutoService) { }

  // Método executado ao inicializar o componente
  ngOnInit(): void {
    this.carregarProdutos();
  }

  // Método para carregar a lista de produtos
  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((data: any[]) => {
      this.produtos = data;
    });
  }

  // Método para adicionar um novo produto
  adicionarProduto(): void {
    this.produtoService.addProduto(this.novoProduto).subscribe(() => {
      alert('Produto adicionado com sucesso!');
      this.novoProduto = { nome: '', preco: 0 }; // Limpa o formulário
      this.carregarProdutos(); // Atualiza a lista de produtos
    });
  }
}