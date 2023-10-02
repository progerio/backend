import Usuario from "../model/Usuario";

export default interface RepositorioUsuario {

    consultarTodos(): Promise<Usuario[]>

    consultarPorId(id: number): Promise<Usuario | null>

    consultarPorEmail(email: string): Promise<Usuario | null>

    criar(usuario: Usuario): Promise<Usuario>
}