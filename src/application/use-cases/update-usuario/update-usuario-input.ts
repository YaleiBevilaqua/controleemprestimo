import { Pessoa } from "../../../domain/entity/pessoa";

export type UpdateUsuarioUseCaseInput = {
    id: string;
    id_pessoa: string;
    username: string;
    password: string;
}
