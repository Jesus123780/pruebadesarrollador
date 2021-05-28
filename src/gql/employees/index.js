import { gql } from '@apollo/client';

export const GET_EMPLOYEES = gql`
    query getEmployees {
      employee{
        eId
        cedula
        nombres
        apellidos
        telefono
        celular
        email
        direccion    
    }
  }  
`
// Sube un nuevo empleado empleado
export const UPDATE_EMPLOYEES = gql`
 mutation registerEmployees($input: IEmployee){
	createEmployee(input: $input){
    eId
    cedula
    nombres
    apellidos
    telefono
    celular
    email
    direccion   
  }
} 
`