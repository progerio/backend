import { type } from "os";
import CasoDeUso from "../../shared/CasoDeUso";

type Entrada = {
    nome: string
    email: string
    senha: string
}

export default class RegistrarUsuario implements CasoDeUso<Entrada, void>{

    executar(dados: Entrada): Promise<void> {
        const { nome, email, senha } = dados

    }

}