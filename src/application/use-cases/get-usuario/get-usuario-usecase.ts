import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUsuarioUseCaseInput } from "./get-usuario-usecase-input";
import { GetUsuarioUseCaseOutput } from "./get-usuario-usecase-output";

export class GetUsuarioUseCase{
    constructor(private readonly usuarioRepository:UsuarioRepository ){}

    async execute(input: GetUsuarioUseCaseInput): Promise<GetUsuarioUseCaseOutput>{
        const usuario = await this.usuarioRepository.getById(input.id)

        return{
            id: usuario.getId(),
            username: usuario.getUsername(),
            password: usuario.getPassword(),
            colaborador: {
                id: usuario.getPessoa().getId(),
                name: usuario.getPessoa().getName(),
            }
        }
    }
}
