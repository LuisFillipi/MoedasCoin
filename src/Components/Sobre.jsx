import Img from '../Img/eutentei.jpg';

const Sobre = ()=>{
return(
    <main className="main-content">
    <div className="content-box">
      <div className="left-side">
      <img src={Img} alt="" width="550" height="400"/>
      </div>
      <div className="right-side">
        <h2>Chico Moedas</h2>
        <p>Este site é dedicado ao nosso ídolo, Chico Moedas, carinhosamente conhecido como o "Louro José do Casimiro"!</p>
        <div className="small-box">
          <p>eu nao aguento mais errar</p>
        </div>
      </div>
    </div>
  </main>
)
}

export default Sobre;