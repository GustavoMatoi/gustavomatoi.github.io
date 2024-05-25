import React from 'react'
import Tecnologias from '../Projects/Tecnologias';
const Index = () => {

    const tecnologias = [
        {
            nome: 'JavaScript'
        },
        {
            nome: 'TypeScript'
        },
        {
            nome: 'Node'
        },
        {
            nome: 'NPM'
        },
        {
            nome: 'React'
        },
        {
            nome: 'React Native'
        },
        {
            nome: 'Firebase'
        },
        {
            nome: 'Async Storage'
        },
        {
            nome: 'HTML'
        },
        {
            nome: 'CSS'
        },
        {
            nome: 'Tailwind css'
        },
        {
            nome: 'Bootstrap css'
        },
        {
            nome: 'GraphQL'
        },
        {
            nome: 'Next.js'
        },
        {
            nome: 'Expo'
        },
        {
            nome: 'Expo Go'
        },
        {
            nome: 'Python'
        },
        {
            nome: 'Machine Learning'
        },
        {
            nome: 'Java'
        },
        {
            nome: 'MySQL'
        },
        {
            nome: 'Figma'
        },
        {
            nome: 'Electron'
        },
        {
            nome: 'NativeWind'
        },
        {
            nome: 'Jest'
        },
        {
            nome: 'React Native Testing Library'
        },
        {
            nome: 'Clean Code'
        },
        {
            nome: 'Git'
        },
        {
            nome: 'Scikit-learn'
        },
        {
            nome: 'Tensorflow'
        },
    ]
    return (
        <div className='flex flex-col flex-wrap p-2 w-11/12 h-screen'>
            <h3 className='p-3 text-cyan-50'>Habilidades técnicas:</h3>
            <p className='text-description text-cyan-50 p-3'>Desenvolvidas ao longo da faculdade, por empresas de ensino (Udemy, Alura, etc.), Youtube, documentação e projetos à parte:</p>
            <div className='flex flex-wrap'>
                {
                    tecnologias.map((tecnologia) =><div className='m-1' key={tecnologia.nome}>  <Tecnologias  nome={tecnologia.nome} /></div>)
                }
            </div>

        </div>
    );
};

export default Index
