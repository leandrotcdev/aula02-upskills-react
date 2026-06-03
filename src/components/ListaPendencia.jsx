import React from 'react';

export default function ListaPendencia({ alunos }) {

    const alunosPendentes = alunos.filter(aluno => aluno.pendencia);

    return (
        <div className="glass-card">
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#f43f5e' }}>
                Atenção: Pendências
            </h2>
            <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Lista de alunos com documentação ou encargos pendentes:
            </p>

            {alunosPendentes.length === 0 ? (
                <p style={{ color: '#10b981', fontWeight: '500' }}>Nenhuma pendência encontrada no sistema.</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {alunosPendentes.map((aluno) => (
                        <div
                            key={aluno.matricula}
                            style={{
                                background: 'rgba(239, 68, 68, 0.08)',
                                border: '1px solid rgba(239, 68, 68, 0.2)',
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <div>
                                <p style={{ fontWeight: '600' }}>{aluno.nome}</p>
                                <span className="text-muted" style={{ fontSize: '0.8rem' }}>Ref: Registro Escolar</span>
                            </div>
                            <span style={{ backgroundColor: '#ef4444', color: '#fff', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700' }}>
                                BLOQUEADO
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}