import "./index.css"
import "./reset.css"
import Data from "../DataBase/index."

export const Main  = () => {
    return (
        <main>
            <h2>Destaques da semana</h2>
            <ul>
                {Data.map((c,index) => (
                    <li className="folder" key={index}>
                        <div className="foto">
                            <img src={c.productImage} alt="" />
                        </div>
                        <div className="texto">
                            <p>{c.description}</p>
                            <small>R${c.price}</small>
                        </div>
                        <div className="botao">
                            <button>Adicionar ao carrinho</button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}