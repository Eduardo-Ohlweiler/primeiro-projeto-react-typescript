import "./index.css"
import "../../componentes/Header/./reset.css"

export const Header = () => {
    const sessoes = ["Categorias", "Carrinho", "Entrega"];
    return(
        <header>
            <section className="navegacao">
                <h1><a href="#">E-Commerce</a></h1>
                <ul>
                    {sessoes.map((item, index) => (
                        <li key={index}>
                            <a className="lista" href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="pesquisar">
                <form>
                    <label htmlFor="pesquise"></label>
                    <input type="text" placeholder="Digite o que procura" id="pesquise" name="pesquise" />
                    <button>Pesquisar</button>
                </form>
            </section>
        </header>
    )
}

export default Header;