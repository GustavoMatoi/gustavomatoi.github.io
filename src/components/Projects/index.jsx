import React from 'react'
import Projeto from './Projeto'

const Projects = () => {
    return (
        <div className=''>
            <Projeto
                titulo="ShapeMeApp - Gestão de Academias"
                descricao={"O ShapeMeApp é um sistema de aplicativos móveis desenvolvido com intuito de simplificar a gestão da academia do IF Sudeste MG - Campus Rio Pomba, sendo dividido em três vertentes: um aplicativo para alunos, um para professores e um para o coordenador. As especificações do sistema foram levantadas pelo próprio orientador e, em cima delas foi-se escolhendo as tecnologias necessárias. Suas principais funcionalidades incluem cadastro, login, gráficos evolutivos, exportação de dados, recuperar senha, sincronização de dados online e offline, montar treino e avaliação do aluno, histórico de avaliações, validador de presença via geolocalização e muito mais."}
                link='https://github.com/GustavoMatoi/smaProfessorV2'
                tecnologias={['JavaScript', 'Firebase', 'React Native', 'Async Storage', 'Victory Native', 'React Navigation', 'Expo', 'Expo Location']}
                size='small'
            />
            <Projeto titulo="Machine Learning e Toxoplasmose Ocular"
                descricao={"Meu TCC: O objetivo principal deste projeto foi explorar um método alternativo para detecção de toxoplasmose ocular em imagens de fundo de olho. Utilizamos técnicas de processamento de imagens para melhorar e padronizar as imagens de retina, extraindo características para serem usadas como parâmetros em algoritmos de Machine Learning. Os algoritmos utilizados incluíram SVM, DT, RF, Adaboost, XGBoost, Multilayer Perceptron e uma Fully-Connected Neural Network. Os resultados foram comparados com trabalhos da literatura, demonstrando que o método desenvolvido apresentou métricas de performance comparáveis às CNNs usadas por outros autores."}
                tecnologias={['Python', 'Machine Learning', 'Análise de Dados', 'Visão Computacional', 'Processamento de imagens']}
                size='small'

            />
            <Projeto
                titulo="Worlds"
                descricao={"Site de viagens responsivo desenvolvido com HTML, CSS, JavaScript e Bootstrap. O objetivo principal do projeto foi praticar a responsividade em diferentes dispositivos."}
                link='https://github.com/GustavoMatoi/projetoWorlds'
                tecnologias={['JavaScript', 'HTML', 'CSS', 'Bootstrap']}
                size='small'

            />
            <Projeto
                titulo="Matoi Store"
                descricao={"E-coomerce desenvolvido com HTML, CSS, JavaScript e Bootstrap. O objetivo principal do projeto foi desenvolver um site em HTML e CSS com a interface de um E-commerce."}
                link={'https://github.com/GustavoMatoi/matoiStore'}
                tecnologias={['JavaScript', 'HTML', 'CSS']}
                size='small'


            />
            <Projeto
                titulo="Site de Animes"
                descricao={"Meu primeiro site desenvolvido com HTML e CSS, utilizando também landing pages. O objetivo principal do projeto foi desenvolver um site em HTML e CSS fórum de discussões online sobre animes."}
                link={'https://github.com/GustavoMatoi/siteDeAnimes'}
                tecnologias={['HTML', 'CSS', 'Landing Pages']}
                size='small'

            />

            <Projeto
                titulo="Paintbrush Java"
                descricao={"Projeto desenvolvido para a faculdade, cujo intuito era desenvolver o PaintBrush da Microsoft utilizando a linguagem de programação Java."}
                link={'https://github.com/GustavoMatoi/PaintBrush-Java'}
                tecnologias={['Java', 'Canvas']}
                size='small'


            />
        </div>
    )
}

export default Projects
