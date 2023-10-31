import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  apiKey = '36aae160-12e3-4da9-9eb4-d9a40f6caab3'
  apiSecret = '69895a0a-b8d8-4450-af4b-5ee719db8578'

  links = {
    boatdrinks: {
      "WAKA SoFit 3500": { 
        href: "https://pago.clip.mx/1abcd865-3e09-42a4-a41d-62195580c149", 
        src: "https://assets-global.website-files.com/62588b32d8d6105ab7aa9721/63bf568610f3fdf437235192_Preview.svg"
      },
      "WAKA SoPro 10000": { 
        href: "https://pago.clip.mx/52ad0685-3c3a-4ae6-afdc-742b8747bb02", 
        src: "https://assets-global.website-files.com/62588b32d8d6105ab7aa9721/63bf568610f3fdf437235192_Preview.svg"
      },
      "iPlay Box 4000": { 
        href: "https://pago.clip.mx/fd72cf7a-a27e-4ac1-ad09-fdd52fce3fd3", 
        src: "https://assets-global.website-files.com/62588b32d8d6105ab7aa9721/63bf568610f3fdf437235192_Preview.svg"
      },
    }

  }

  constructor() { }
}
