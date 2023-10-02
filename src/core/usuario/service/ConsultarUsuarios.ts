import { Usuario } from "@prisma/client";
import CasoDeUso from "../../shared/CasoDeUso";
import RepositorioUsuario from "./RepositorioUsuario";

export default class ConsultarUsuarios implements CasoDeUso<void, Usuario[]>{

    constructor(readonly repositorio: RepositorioUsuario) { }

    async executar(): Promise<Usuario[]> {
        return await this.repositorio.consultarTodos();
    }

}