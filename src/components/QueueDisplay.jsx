import React from 'react';

const QueueDisplay = ({ currentTicket, isQueueEmpty }) => {
  return (
    <div className="queuedisplay">
      {isQueueEmpty ? (
        <h3>A fila está vazia</h3>
      ) : (
        <h3>Senha chamada: {currentTicket ? `${currentTicket.type} ${currentTicket.number}` : 'Aguardando...'}</h3>
      )}
    </div>
  );
};

export default QueueDisplay;
