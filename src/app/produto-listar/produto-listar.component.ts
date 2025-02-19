import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-produto-listar',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {
  produtos: any[] = [];
  colunas: string[] = ['nome', 'preco'];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((data: any[]) => {
      this.produtos = data;
    });
  }
}