import Elysia from "elysia";
import ConsultarUsuarioPorId from "../core/usuario/service/ConsultarUsuarioPorId";

export default class ConsultarUsuarioPorIdController {
    constructor(
        readonly servidor: Elysia,
        readonly casoDeUso: ConsultarUsuarioPorId
    ) {
        servidor.get('/usuarios/:id', async ({ params }) => {
            const usuario = await casoDeUso.executar(+params.id)

            return {
                status: 200,
                body: {
                    data: usuario
                }
            }
        });
    }
}