import Elysia from "elysia";
import ConsultarUsuarios from "../core/usuario/service/ConsultarUsuarios";

export default class ConsultarUsuariosController {
    constructor(
        readonly servidor: Elysia,
        readonly casoDeUso: ConsultarUsuarios
    ) {
        servidor.get('/usuarios', async () => {
            const usuarios = await casoDeUso.executar();

            return {
                status: 200,
                body: {
                    data: usuarios
                }
            }
        });
    }
}