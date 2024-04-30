import './Banner.css'

function Banner (){
    return(
        <>
        <header className="banner"> 
        <img src="/imagens/banner.png" alt="banner principal da página organo"></img>
        </header>
        <h1 style={{display: "flex", justifyContent: "center"}}>Desenvolvido por Leonardo, curso Alura </h1>
        </>
    )
}

export default Banner