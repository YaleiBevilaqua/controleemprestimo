import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetAllUsuarioUseCaseInput } from "./get-usuarios-usecase-input";
import { GetAllUsuarioUseCaseOutput } from "./get-usuarios-usecase-output";

export class GetUsuariosUseCase{
    constructor(private readonly usuarioRepository:UsuarioRepository){}

    execute(input: GetAllUsuarioUseCaseInput): GetAllUsuarioUseCaseOutput[] {
        const listaDeUsuario = this.usuarioRepository.getAll();

        const output: GetAllUsuarioUseCaseOutput[] = [];

        for(const itemDaLista of listaDeUsuario){
            output.push(
                {
                    id: itemDaLista.getId(),
                    username: itemDaLista.getUsername(),
                    password: itemDaLista.getPassword(),
                    pessoa: {
                        id: itemDaLista.getId(),
                        name: itemDaLista.getUsername()
                    }

                }
            )
        }
        return output
    }
}
