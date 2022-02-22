import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


interface ErrorValidate {
  [s:string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() {}

  existeUsuario( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate>{
    
    return new Promise( (resolve,reject) => {
      setTimeout( () => {
          if( control.value === 'strider' ) {
            resolve( { existe: true } )
          } else {
            resolve( null );
          }
      },3500)
    })
  }

  noHerrera( control: FormControl ): ErrorValidate {  
    if( control.value?.toLowerCase() === 'herrera' ) {
      return {
        noHerrera: true
      }  
    } else {
      return null;
    }  
  }

  passwordsIguales( pass1Name: string, pass2Name: string ) {


    return ( formGroup: FormGroup ) => {
      
      const pass1Contro = formGroup.controls[pass1Name];
      const pass2Contro = formGroup.controls[pass2Name];

      if( pass1Contro.value === pass2Contro.value  ) {
        pass2Contro.setErrors(null);
      } else {
        pass2Contro.setErrors( { noEsIgual: true });
      }

    }

  }



}
