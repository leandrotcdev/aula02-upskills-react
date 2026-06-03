import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Alunos from './components/Alunos'
import ListaPendencia from './components/ListaPendencia'
import ContarPendencia from './components/ContarPendencia'
import './index.css'
import { alunos } from './data/alunos'

function App() {

  return (
    <div className="container">
      {/* Cabeçalho */}
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', letterSpacing: '-0.03em' }}>
          Portal Acadêmico - Upskills React
        </h1>
        <p className="text-secondary" style={{ marginTop: '0.5rem' }}>
          Controle de notas, médias e pendências de alunos em tempo real.
        </p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <ContarPendencia alunos={alunos}/>
      </section>

      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>

        <section className="card">
          <Alunos alunos={alunos} />
        </section>

        <section className="glass-card">
          <ListaPendencia alunos={alunos} />
        </section>

      </main>
    </div>
  )

}

export default App