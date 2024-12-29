import React, { useState } from 'react';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleTaskNameChange = (e) => setTaskName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      taskName,
      description,
      date,
    });
    setTaskName('');
    setDescription('');
    setDate('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Task</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Task Name</label>
          <input
            type="text"
            placeholder="Enter task name"
            value={taskName}
            onChange={handleTaskNameChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Description</label>
          <textarea
            placeholder="Add a brief description"
            value={description}
            onChange={handleDescriptionChange}
            style={styles.textarea}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Deadline</label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            style={styles.input}
          />
        </div>
        <div style={styles.buttonGroup}>
          <button type="button" style={styles.cancelButton}>
            Cancel
          </button>
          <button type="submit" style={styles.addButton}>
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '25px',
    borderRadius: '12px',
    background: '#fdfdfd',
    border: '1px solid #e6e6e6',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    fontFamily: "'Inter', sans-serif",
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '20px',
    fontWeight: '500',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#666',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '14px',
    backgroundColor: '#fff',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '14px',
    backgroundColor: '#fff',
    resize: 'none',
    height: '80px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#007bff',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cancelButton: {
    background: '#f5f5f5',
    color: '#666',
    border: '1px solid #ddd',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  addButton: {
    background: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',  
    transition: 'background-color 0.3s ease',
  },
};

export default AddTask;
  