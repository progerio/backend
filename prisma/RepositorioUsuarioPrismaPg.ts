import { PrismaClient } from "@prisma/client";
import Usuario from "../src/core/usuario/model/Usuario";
import RepositorioUsuario from "../src/core/usuario/service/RepositorioUsuario";

export default class RepositorioUsuarioPrismaPg implements RepositorioUsuario {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    consultarPorEmail(email: string): Promise<Usuario | null> {
        return this.prisma.usuario.findUnique({
            where: {
                email
            },
        })
    }

    criar(usuario: Usuario): Promise<Usuario> {
        return this.prisma.usuario.create({ data: usuario })
    }
}