import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  // URL del archivo CSV en línea
  csvURL = 'https://docs.google.com/spreadsheets/d/1H8O3raaIIt_mYp6GwzQFVRBYVyhWHAlSuRzB63LAmeE/gviz/tq?tqx=out:csv&gid=1192024511';

  jsonData =  [];

  constructor() { }

  // Función para descargar y procesar el CSV
  async fetchAndParseCSV() {
    try {
        const response = await fetch(this.csvURL, {
          cache: 'no-cache' // Agrega esta opción para evitar el caché
        });
        if (!response.ok) {
            throw new Error(`Error al cargar el CSV: ${response.statusText}`);
        }

        const csvText = await response.text();
        const csvRows = csvText.split('\n'); // Divide el CSV en filas

        // Obtiene los encabezados (la primera fila)
        const headers = csvRows[0].split(',');

        // Inicializa un arreglo para almacenar los objetos
        const data = [];

        // Recorre las filas del CSV y crea objetos
        for (let i = 1; i < csvRows.length; i++) {
            const values = csvRows[i].split(',');
            if (values.length === headers.length) {
                let row = {}
                for (let j = 0; j < headers.length; j++) {
                    row[headers[j]] = values[j]
                }
                data.push(row);
            }
        }

        console.log(this.buildData(data));

        console.log(this.jsonData)

    } catch (error) {
        console.error('Error:', error);
    }
  }

   buildData( data ){

    for (var i = 1; i < data.length; i++) {

        var row = data[i];

        if(row["\"Producto\""] == "\"\""){
            break;
        }


        var rowData = {
            "Producto": row["\"Producto\""].substring(1, row["\"Producto\""].length - 1),
            "Inventario": row["\"Inventario\""].substring(1, row["\"Inventario\""].length - 1),
            "Foto": row["\"Foto\""].substring(1, row["\"Foto\""].length - 1),
            "Sabor": row["\"Sabor\""].substring(1, row["\"Sabor\""].length - 1),
            "Modelo": row["\"Modelo\""].substring(1, row["\"Modelo\""].length - 1),
            "Hits": row["\"Hits\""].substring(1, row["\"Hits\""].length - 1),
            "PrecioAirb": parseInt(row["\"PrecioAirb\""].substring(1, row["\"PrecioAirb\""].length - 1)),
            "PrecioBarco": parseInt(row["\"PrecioBarco\""].substring(1, row["\"PrecioBarco\""].length - 1)),
            "PrecioAirbUSD": parseInt(row["\"PrecioAirbUSD\""].substring(1, row["\"PrecioAirbUSD\""].length - 1)),
            "PrecioBarcoUSD": parseInt(row["\"PrecioBarcoUSD\""].substring(1, row["\"PrecioBarcoUSD\""].length - 1)),
            "LinkBoat": row["\"LinkBoat\""].substring(1, row["\"LinkBoat\""].length - 1),
            "LinkAirb": row["\"LinkAirb\""].substring(1, row["\"LinkAirb\""].length - 1),
            "ClipSrc": row["\"ClipSrc\""].substring(1, row["\"ClipSrc\""].length - 1),
        }

        if( this.categorize(rowData, this.jsonData) === true ){
            this.jsonData[rowData['Modelo']]['Sabor'].push({"Sabor": rowData['Sabor'], "Inventario": parseInt(rowData['Inventario'])});
        }

    }

    return this.jsonData;
  }

  categorize( data, jsonData ){

      if( jsonData[data["Modelo"]] ){
          return true;
      }else{
          jsonData[data["Modelo"]] = data;
          jsonData[data["Modelo"]]['Sabor'] = [{"Sabor": data['Sabor'], "Inventario": parseInt(data['Inventario'])}];
          delete jsonData[data["Modelo"]]['Inventario'];
      }

      return jsonData;
  }
}
