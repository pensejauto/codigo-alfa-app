import React, { useState } from 'react';

export default function Home() {
  const [comando, setComando] = useState('');
  const [resposta, setResposta] = useState('');

  const executar = () => {
    if (comando.toLowerCase().includes('frase')) {
      setResposta('A verdadeira força age no silêncio.');
    } else if (comando.toLowerCase().includes('imagem')) {
      setResposta('Imagem simbólica gerada: Energia Alfa em ação.');
    } else if (comando.toLowerCase().includes('plano')) {
      setResposta('Plano ativado: 3 passos estratégicos para iniciar seu império oculto.');
    } else {
      setResposta('Comando não reconhecido. Tente: frase, imagem ou plano.');
    }
  };

  return (
    <div style={{ background: '#000', color: '#0ff', padding: 20, minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Painel Código Alfa</h1>
      <textarea
        style={{ width: '100%', height: 100, marginBottom: 10 }}
        placeholder="Digite um comando: frase, imagem, plano..."
        value={comando}
        onChange={(e) => setComando(e.target.value)}
      />
      <button style={{ padding: 10, background: '#0f0', border: 'none' }} onClick={executar}>
        Ativar
      </button>
      <pre style={{ marginTop: 20, fontSize: 18 }}>{resposta}</pre>
    </div>
  );
}
