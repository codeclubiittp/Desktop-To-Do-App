import React, { useState } from 'react';

const AddTask = () => {
const [taskName, setTaskName] = useState('');
const [description, setDescription] = useState('');
const [subtasks, setSubtasks] = useState(['']);
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const [showEmailDropdown, setShowEmailDropdown] = useState(false);
const [selectedEmails, setSelectedEmails] = useState([]);

const emailOptions = ['email1@example.com', 'email2@example.com', 'email3@example.com', 'email4@example.com'];

const handleTaskNameChange = (e) => setTaskName(e.target.value);
const handleDescriptionChange = (e) => setDescription(e.target.value);
const handleSubtaskChange = (index, value) => {
const newSubtasks = [...subtasks];
newSubtasks[index] = value;
setSubtasks(newSubtasks);
};

const addSubtask = () => setSubtasks([...subtasks, '']);

const removeSubtask = (index) => {
const newSubtasks = subtasks.filter((_, subtaskIndex) => subtaskIndex !== index);
setSubtasks(newSubtasks);
};

const handleStartDateChange = (e) => setStartDate(e.target.value);
const handleEndDateChange = (e) => setEndDate(e.target.value);

const handleSubmit = (e) => {
e.preventDefault();
console.log({
taskName,
description,
subtasks,
startDate,
endDate,
selectedEmails,
});
// Reset the form
setTaskName('');
setDescription('');
setSubtasks(['']);
setStartDate('');
setEndDate('');
setSelectedEmails([]);
setShowEmailDropdown(false);
};

const toggleEmailSelection = (email) => {
setSelectedEmails((prevSelectedEmails) =>
prevSelectedEmails.includes(email)
? prevSelectedEmails.filter((selectedEmail) => selectedEmail !== email)
: [...prevSelectedEmails, email]
);
};

const handleEmailDropdown = () => setShowEmailDropdown(!showEmailDropdown);

const handleEmailConfirmation = () => {
setShowEmailDropdown(false);
};

const BellIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={{ stroke: 'black', strokeWidth: 2, cursor: 'pointer' }} // Adjust stroke color and width
    >
      <path
        d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zM18 8c0-4-3-7-6-7S6 4 6 8c0 4-3 6-3 8h18c0-2-3-4-3-8z"
        fill="none"
      />
    </svg>
  );

return (
<div style={styles.addTaskContainer}>
<div style={styles.globalSearch}>
        <input type="text" placeholder="Global search...  " style={styles.searchInput} />  
</div>
<form onSubmit={handleSubmit} style={styles.taskForm}>
<h2 style={styles.heading}>Add Task</h2>

<input
type="text"
placeholder="Task name"
value={taskName}
onChange={handleTaskNameChange}
style={styles.taskInput}
/>

<div style={styles.selectForContainer}>
<span style={styles.inText}>In:</span>
<select style={styles.taskSelect}>
<option value="">Select list...</option>
{/* Add your list options here */}
</select>
<span style={styles.forText}>For</span>
<span style={styles.emailSymbol} onClick={handleEmailDropdown}>
📧 {/* You can use an icon from your icon library */}
</span>
{showEmailDropdown && (
<div style={styles.emailDropdown}>
{emailOptions.map((email, index) => (
<label key={index} style={styles.emailOption}>
<input
type="checkbox"
value={email}
checked={selectedEmails.includes(email)}
onChange={() => toggleEmailSelection(email)}
style={styles.checkbox}
/>
{email}
</label>
))}
<button type="button" onClick={handleEmailConfirmation} style={styles.confirmButton}>
OK
</button>
</div>
)}
</div>
{/* Display selected emails */}
{selectedEmails.length > 0 && (
<div style={styles.selectedEmailsContainer}>
<span>Selected Emails: </span>
{selectedEmails.join(', ')}
</div>
)}

<label style={styles.label}>Description</label>
<textarea
placeholder="Write something..."
value={description}
onChange={handleDescriptionChange}
style={styles.taskTextarea}
/>

<div style={styles.subtaskContainer}>
{/* <label style={styles.label}>Add Subtask</label> */}
{subtasks.map((subtask, index) => (
<div key={index} style={styles.subtaskInputContainer}>
<input
type="text"
value={subtask}
onChange={(e) => handleSubtaskChange(index, e.target.value)}
style={styles.subtaskInput}
placeholder="Subtask"
/>
<button type="button" onClick={() => removeSubtask(index)} style={styles.removeSubtaskBtn}>
❌
</button>
</div>
))}
<button type="button" onClick={addSubtask} style={styles.addSubtaskBtn}>
+ Add subtask
</button>
</div>

<label style={styles.label}>Attachments</label>
<input type="file" style={styles.attachmentInput} />

<div style={styles.dateContainer}>
<div style={styles.dateInput}>
<span style={styles.inText}>Start date:</span>
<input
type="date"
value={startDate}
onChange={handleStartDateChange}
style={styles.smallDatePicker} // Use the new style here
/>
</div>
<div style={styles.dateInput}>
<span style={styles.inText}>End date:</span>
<input
type="date"
value={endDate}
onChange={handleEndDateChange}
style={styles.smallDatePicker} // Use the new style here
/>
</div>
</div>

<div style={styles.buttonContainer1}>
<div style={styles.buttonContainer}>
  <button type="button" style={styles.cancelBtn}>
    Cancel
  </button>
  <button type="submit" style={styles.addTaskBtn}>
    Add task
  </button>
</div>

</div>
</form>
</div>
);
};

const styles = {
addTaskContainer: {
padding: '20px',
backgroundColor: '#fff',
borderRadius: '8px',
boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
width: '600px',
margin: 'auto',
},
globalSearch: {
marginBottom: '20px',
width: '95%',
},
buttonContainer1: {
    display: 'flex',
    justifyContent: 'center', // Centers buttons horizontally
    gap: '10px', // Optional: adds space between buttons
    marginTop: '20px', // Optional: adds space above buttons
    marginRight: '10px', // Optional: adds space
  },
searchInput: {
width: '100%',
padding: '10px',
borderRadius: '5px',
border: '1px solid #ccc',
},
taskForm: {
display: 'flex',
flexDirection: 'column',
},
heading: {
marginBottom: '20px',
},
taskInput: {
padding: '10px',
marginBottom: '10px',
border: '1px solid #ccc',
borderRadius: '5px',
},
selectForContainer: {
display: 'flex',
alignItems: 'center',
marginBottom: '10px',
},
taskSelect: {
padding: '10px',
borderRadius: '5px',
border: '1px solid #ccc',
},
forText: {
marginLeft: '10px',
marginRight: '10px',
},
emailSymbol: {
cursor: 'pointer',
fontSize: '1.2rem',
},
emailDropdown: {
position: 'absolute',
backgroundColor: '#fff',
border: '1px solid #ccc',
borderRadius: '5px',
padding: '10px',
marginTop: '5px',
zIndex: '1000',
},
emailOption: {
display: 'block',
marginBottom: '5px',
},
checkbox: {
marginRight: '10px',
},
selectedEmailsContainer: {
marginTop: '5px',
},
label: {
marginBottom: '5px',
},
taskTextarea: {
padding: '10px',
marginBottom: '10px',
border: '1px solid #ccc',
borderRadius: '5px',
resize: 'none',
height: '100px',
},
subtaskContainer: {
marginBottom: '10px',
},
subtaskInputContainer: {
display: 'flex',
alignItems: 'center',
marginBottom: '5px',
},
subtaskInput: {
padding: '10px',
border: '1px solid #ccc',
borderRadius: '5px',
width: '100%',
marginRight: '10px',
},
addSubtaskBtn: {
backgroundColor: 'transparent',
border: 'none',
color: '#007bff',
cursor: 'pointer',
},
removeSubtaskBtn: {
backgroundColor: 'transparent', // Change to your preferred background color if needed
  border: 'none',
  color: 'black', // Change text color to black
  cursor: 'pointer',
  fontSize: '1rem', // Adjust the font size to make the button smaller
  padding: '5px 10px', // Adjust padding to reduce size
},
attachmentInput: {
marginBottom: '10px',
},
dateContainer: {
display: 'flex',
justifyContent: 'space-between',
marginBottom: '10px',
},
bellIcon: {
  marginLeft: '10px', // Space between the search input and icon
  alignSelf: 'center', // Center the icon vertically
  fontSize: '1.5rem', // Adjust size as needed
},
dateInput: {
flex: '1',
marginRight: '10px',
},
smallDatePicker: {
width: '80%', // Reduced width for smaller size
padding: '8px', // Reduced padding
borderRadius: '5px',
border: '1px solid #ccc',
},
buttonContainer: {
display: 'flex',
justifyContent: 'space-between',
marginRight: '10px', // Optional: adds space
},
cancelBtn: {
padding: '10px 20px',
backgroundColor: '#f8f9fa',
border: '1px solid #ccc',
borderRadius: '100px',
cursor: 'pointer',
marginRight: '50px', // Optional: adds space
},
addTaskBtn: {
padding: '10px 20px',
backgroundColor: '#007bff',
color: '#fff',
border: 'none',
borderRadius: '100px',
cursor: 'pointer',
},
confirmButton: {
marginTop: '10px',
padding: '5px 10px',
backgroundColor: '#065f46',
color: '#fff',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
},
inText: {
    marginRight: '5px', // Add a small space after "In:"
  },
};

export default AddTask;