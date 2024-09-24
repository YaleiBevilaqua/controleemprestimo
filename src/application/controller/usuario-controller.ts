import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import { CreateUsuarioUseCase } from "../use-cases/create-usuario/create-usuario-usecase";
import { UpdateUsuarioUseCase } from "../use-cases/update-usuario/update-usuario-usecase";

export class UsuarioController{
    constructor(private readonly usuarioRepository: UsuarioRepository) {}

    create(input: any){
        const createUsuarioUseCase = new CreateUsuarioUseCase(this.usuarioRepository);
        createUsuarioUseCase.execute(input);
    }

    update(input: any){
        const updateUsuarioUseCase = new UpdateUsuarioUseCase(this.usuarioRepository);
        updateUsuarioUseCase.execute(input);
    }
}