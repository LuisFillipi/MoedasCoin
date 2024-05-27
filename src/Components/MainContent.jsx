import './MainContent.css'; 

import Img from '../Img/Chico.jpg';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="content-box">
        <div className="left-side">
          <img src={Img} alt="" width="550" height="400"/>
        </div>
        <div className="right-side">
          <h2>Chico Moedas</h2>
          <p>Nascido em Niterói, Rio de Janeiro, em 6 de maio de 1996, Chico iniciou cursos de Cinema e Administração, mas não os concluiu. Seu envolvimento com criptomoedas lhe rendeu o apelido "Moedas". Em 2022, participou da cobertura da Copa do Mundo no canal do YouTuber Casimiro Miguel.</p>
          <div className="small-box">
            <p>Nós é o terror do Kama Sutra</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
