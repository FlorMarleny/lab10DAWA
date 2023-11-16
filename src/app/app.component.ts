// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  art: any = {};
  articulos: any[] = [];

  agregar() {
    // Verificar si el artículo ya existe en la lista
    const index = this.articulos.findIndex(item => item.codigo === this.art.codigo);

    if (index === -1) {
      // Si no existe, agregar el artículo a la lista
      this.articulos.push({ ...this.art });
    } else {
      // Si existe, actualizar el artículo existente
      this.articulos[index] = { ...this.art };
    }

    // Limpiar el objeto para un nuevo artículo
    this.art = {};
  }

  borrar(articulo: any) {
    // Eliminar el artículo de la lista
    this.articulos = this.articulos.filter(item => item !== articulo);
  }

  seleccionar(articulo: any) {
    // Seleccionar el artículo para su modificación
    this.art = { ...articulo };
  }

  hayRegistros() {
    return this.articulos.length > 0;
  }
}
