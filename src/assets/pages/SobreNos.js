import styles from './SobreNos.module.css'

import ricardo from '../img/ricardo-site.png'
import davi from '../img/Davii.png'
import diogo from '../img/Diogo.png'
import rafael from '../img/Rafael.png'

const fotos = [davi, diogo , rafael, ricardo]

function SobreNos() {
    return(
        <div className={styles.container}>
            <h1><span>Equipe</span> de sonhadores!</h1>
            <div className={styles.pic}>
                {fotos.map(fotos => (<img src={fotos} alt='Integrantes' className={styles.inner}/>))}
            </div>
            <h1>Nossa <span>história!</span></h1>
            <p>O projeto enfrentou diversos desafios ao longo de sua jornada de desenvolvimento. Inicialmente, uma equipe de sete membros estava determinada a superar as dificuldades e criar um site inovador. No entanto, ao longo do tempo, apenas quatro membros permaneceram comprometidos com o projeto. Aprender diferentes linguagens de programação e ferramentas, como React, HTML, Java, JavaScript e Firebase, foi um dos maiores desafios, exigindo pesquisa, estudo e prática adicionais. A metodologia Scrum foi adotada para o planejamento e organização, dividindo o trabalho em sprints e estabelecendo metas semanais. Conciliar o projeto com obrigações acadêmicas também foi um desafio, exigindo planejamento cuidadoso e gestão eficiente do tempo. Apesar das dificuldades, a equipe manteve o foco no propósito do projeto e, no final, entregou um site funcional e na melhor qualidade possível. A experiência proporcionou lições valiosas sobre gerenciamento de tempo, trabalho em equipe e superação de desafios, preparando os membros para futuros desafios profissionais na área de engenharia de software.</p>
        </div>
    )
}

export default SobreNos
