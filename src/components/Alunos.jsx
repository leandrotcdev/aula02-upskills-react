import React from 'react';

export default function Alunos({ alunos }) {
    return (
        <div className="card">
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border)', paddingBottom: '0.5rem' }}>
                Lista de Todos os Alunos
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {alunos.map((aluno) => (
                    <div
                        key={aluno.matricula}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.75rem 0',
                            borderBottom: '1px solid var(--border)'
                        }}
                    >
                        <div>
                            <p style={{ fontWeight: '600' }}>{aluno.nome}</p>
                            <span className="text-muted" style={{ fontSize: '0.85rem' }}>Matrícula: #{aluno.matricula}</span>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontWeight: '700', color: 'var(--primary)' }}>Média: {aluno.media}</p>
                            <span style={{ fontSize: '0.75rem', color: aluno.pendencia ? '#ef4444' : '#10b981' }}>
                                {aluno.pendencia ? '● Com Pendência' : '✓ Regular'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}