import React from 'react'
import '../../index.css';
const About = () => {
    return (
        <div className='h-screen w-11/12'>
            <p className='p-5 text-cyan-50 text-about'>
                Desde muito jovem, tive um contato precoce com computadores e a internet, o
                que me proporcionou uma familiaridade natural e uma rápida capacidade de aprendizado
                em tecnologia. Ao concluir o ensino médio, decidi ingressar no curso de Ciência da Computação,
                impulsionado pela minha afinidade com a área. Durante minha jornada acadêmica, minha percepção
                dos computadores evoluiu significativamente, passando de simples fontes de entretenimento para
                portais de acesso a vastos e valiosos conhecimentos. Desenvolvi um interesse apaixonado pela
                área de desenvolvimento de software, especialmente em <span className='text-cyan-200 font-bold'>React</span> e <span className='text-cyan-200 font-bold'>React Native</span>.
            </p>
            <p className='p-5 text-cyan-50 text-about'>
            Atualmente, meu foco é explorar e dominar tecnologias emergentes como desenvolvedor mobile e web, 
            aplicando esses conhecimentos na resolução de problemas dos usuários. Estou estudando 
            o <span className='font-bold text-cyan-200'> framework Next.js</span>. Durante minha graduação, 
            participei de um projeto de iniciação científica, desenvolvendo um sistema de aplicativos móveis 
            para a academia do IF Sudeste MG - Campus Rio Pomba, usando <span className='font-bold text-cyan-200'>React Native</span>,
            o que aumentou meu interesse por essa tecnologia. Além disso, <span className='font-bold text-cyan-200'>tenho 
            habilidade para ensinar</span>, demonstrada como professor de Informática em um curso técnico da Escola Estadual 
            Professor José Borges de Morais, onde ensinei <span className='font-bold text-cyan-200'>ferramentas 
            básicas de informática (Word, Excel, E-mail, Google)</span> para alunos sem experiência prévia.
            </p>
            <p className='p-5 text-cyan-50 text-about'>
                Fora do ambiente profissional e acadêmico, encontro satisfação em diversos hobbies, incluindo  de peças impressas em 
                3d, jogos e a prática de exercícios físicos. 
                exercícios físicos. <span className='font-bold text-cyan-200 underline'>Costumo ser bem detalhista em meus projetos, visando 
                sempre atingir a melhor qualidade possível</span>.
                
            </p>
        </div>
    )
}

export default About
