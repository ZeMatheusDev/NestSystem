import { Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentService {
  // Adicione métodos aqui para lógica de negócio, se necessário
  getDepartments() {
    return [{ id: 1, nome: 'Departamento 1' }];
  }
}