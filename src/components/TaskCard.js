import React from 'react';

function TaskCard({ task, onDragStart }) {
  // Determine badge color based on status
  const getBadgeColor = (status) => {
    switch (status) {
      case 'To Do':
        return 'bg-secondary';
      case 'In Progress':
        return 'bg-primary';
      case 'Done':
        return 'bg-success';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div 
      className="card mb-2 task-card"
      draggable
      onDragStart={(e) => onDragStart(e, task)}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h6 className="card-title mb-0 flex-grow-1">{task.title}</h6>
        </div>
        
        {task.description && (
          <p className="card-text small text-muted mb-2">{task.description}</p>
        )}
        
        <div className="d-flex justify-content-between align-items-center">
          <span className={`badge ${getBadgeColor(task.status)}`}>
            {task.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;