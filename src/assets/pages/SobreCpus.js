import styles from './SobreCpus.module.css'

import processadorfoto from '../img/processador-site.jpg'
import memoriaramfoto from '../img/memoriaram-site.jpg'
import placadevideofoto from '../img/placadevideo-site-2-grande.png'
import armazenamentofoto from '../img/armazenamento-site-2.jpg'

function SobreCpus(){
    return(
        <div className={styles.container}>
            <h1>Um pouco <span>sobre CPUS!</span></h1>
            <h2>Mas afinal, o que é uma CPU?</h2>
            <p>Cpu é uma sigla em inglês para “Central Processing Unit”, traduzindo para o portugês fica "Unicade Central de Processamento", ou seja, o processador. Pórem, a sigla também é usada para referir ao computador inteiro, então refere-se a todos os componentes, mas o que são componentes? Veja a seguir. </p>
            <div className={styles.caixas}>
                <div className={styles.caixasitems}>
                    <h2>Processador</h2>
                    <p>Um processador é o "cérebro" do computador. Ele executa todas as tarefas necessárias para o funcionamento do sistema. O processador é responsável por processar informações, realizar cálculos matemáticos, executar programas e controlar os dispositivos conectados. É como um superfuncionário que segue instruções para fazer todas as operações necessárias para que o computador funcione corretamente. O desempenho do processador é medido pela sua velocidade, quantidade de núcleos e eficiência na execução das tarefas. Em resumo, o processador é o responsável por tornar o computador capaz de executar todas as suas funções e tarefas.</p>
                    <img src={processadorfoto} alt='Foto Processador'/>
                </div>
                <div className={styles.caixasitems}>
                    <h2>Memória RAM</h2>
                    <p>A memória RAM (Random Access Memory) é como a "mesa de trabalho" do computador. Ela armazena temporariamente os dados e programas que estão sendo usados ativamente. Quando você abre um programa, seus dados são carregados na RAM para que o processador possa acessá-los rapidamente. A RAM permite que o computador execute várias tarefas ao mesmo tempo, pois oferece acesso rápido aos dados. Quanto mais RAM um computador tem, mais programas e arquivos podem ser mantidos na memória simultaneamente, o que ajuda a evitar a lentidão. No entanto, a RAM é volátil, o que significa que os dados são perdidos quando o computador é desligado, sendo necessário salvá-los em um armazenamento permanente, como um disco rígido.</p>
                    <img src={memoriaramfoto} alt='Foto Memória RAM'/>
                </div>
            </div>
            <div className={styles.caixasbaixo}>
                <div className={styles.caixasitems}>
                    <h2>Placa de Vídeo</h2>
                    <p>A placa de vídeo é um componente do computador que melhora a qualidade das imagens exibidas no monitor. Ela é responsável por processar gráficos complexos em jogos, vídeos e outros aplicativos visuais. A placa de vídeo ajuda a tornar as imagens mais bonitas, fluidas e realistas, proporcionando uma experiência visual incrível. Em resumo, ela é como um "motor gráfico" que transforma dados em imagens incríveis no computador.</p>
                    <img src={placadevideofoto} alt='Foto Placa de Vídeo'/>
                </div>
                <div className={styles.caixasitems}>
                    <h2>Armazenamento</h2>
                    <p>O armazenamento SSD e HD são componentes que guardam os dados no computador. O SSD é mais rápido e ajuda o computador a iniciar e executar programas mais rapidamente, além de melhorar o desempenho geral. O HD é mais lento, mas tem maior capacidade de armazenamento para guardar arquivos como fotos, vídeos e documentos. Em resumo, o SSD acelera o computador, enquanto o HD oferece espaço para guardar muitos arquivos.</p>
                    <img src={armazenamentofoto} alt='Foto Armazenamento'/>
                </div>
            </div>
            <br/><br/><br/><br/>
        </div>
    )
}

export default SobreCpus
