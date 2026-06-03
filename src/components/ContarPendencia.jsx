import React from 'react';

export default function ContarPendencia({ alunos }) {

  const totalAlunos = alunos.length;
  const totalPendencias = alunos.filter(aluno => aluno.pendencia).length;
  const percentual = totalAlunos > 0 ? Math.round((totalPendencias / totalAlunos) * 100) : 0;

  const corIndicador = totalPendencias > 0 ? '#ef4444' : '#10b981';

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h3 className="text-secondary" style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Taxa de Pendências
      </h3>
      
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', margin: '0.2rem 0' }}>
        <span style={{ fontSize: '3rem', fontWeight: '800', color: corIndicador, lineHeight: '1' }}>
          {totalPendencias}
        </span>
        <span className="text-muted" style={{ fontSize: '1rem', fontWeight: '500' }}>
          / {totalAlunos} alunos
        </span>
      </div>

      <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--border)', borderRadius: '3px', overflow: 'hidden', marginTop: '0.2rem' }}>
        <div 
          style={{ 
            width: `${percentual}%`, 
            height: '100%', 
            backgroundColor: corIndicador,
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }} 
        />
      </div>

      <p className="text-muted" style={{ fontSize: '0.85rem', marginTop: '0.4rem' }}>
        {totalPendencias > 0 
          ? `Aproximadamente ${percentual}% da turma possui algum tipo de restrição.`
          : 'Excelente! Todos os registros acadêmicos estão regulares.'}
      </p>
    </div>
  );
  
}