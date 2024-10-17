import React, { useState } from 'react';
import QueueDisplay from './QueueDisplay';

const Atendimento = () => {
  const [normalQueue, setNormalQueue] = useState([]);
  const [preferentialQueue, setPreferentialQueue] = useState([]);
  const [currentTicket, setCurrentTicket] = useState(null);

  const generateTicket = (type) => {
    const newNumber = type === 'Preferencial' ? preferentialQueue.length + 1 : normalQueue.length + 1;
    const newTicket = {
      type,
      number: type === 'Preferencial' ? `P${newNumber}` : `N${newNumber}`
    };

    if (type === 'Preferencial') {
      setPreferentialQueue([...preferentialQueue, newTicket]);
    } else {
      setNormalQueue([...normalQueue, newTicket]);
    }
  };

  const callNextTicket = () => {
    if (preferentialQueue.length > 0) {
      const next = preferentialQueue[0];
      setCurrentTicket(next);
      setPreferentialQueue(preferentialQueue.slice(1));
    } else if (normalQueue.length > 0) {
      const next = normalQueue[0];
      setCurrentTicket(next);
      setNormalQueue(normalQueue.slice(1));
    } else {
      setCurrentTicket(null);
    }
  };

  const isQueueEmpty = preferentialQueue.length === 0 && normalQueue.length === 0;

  return (
    <div className="atendimento" id="atendimento">
      <center><h2>Atendimento ao Cliente</h2></center>
      <div className="buttons">
        <button onClick={() => generateTicket('Normal')}>Gerar Senha Normal</button>
        <button onClick={() => generateTicket('Preferencial')}>Gerar Senha Preferencial</button>
        <button onClick={callNextTicket} disabled={isQueueEmpty}>Chamar Próximo</button>
      </div>
      <QueueDisplay currentTicket={currentTicket} isQueueEmpty={isQueueEmpty} />
    </div>
  );
};

export default Atendimento;
