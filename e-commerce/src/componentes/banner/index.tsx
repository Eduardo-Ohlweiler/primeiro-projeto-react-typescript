import "./index.css"
import "./reset.css"
import img from "./images/banner.jpg";


interface BannerProps {
    title: string;
}

export const Banner:React.FC<BannerProps> = ({title}) => {
    return (
        <section className="banner">
            <img src={img} alt="Banner" />
            <div className="texto">
                <h1>{title}</h1>
                <button>Veja</button>
            </div>
        </section>
    )
}
