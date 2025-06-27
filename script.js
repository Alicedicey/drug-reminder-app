// Select form and reminder list
const drugForm = document.getElementById('drugForm');
const reminderList = document.getElementById('reminderList');

// Listen for form submission
drugForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Stop the form from reloading the page

  // Get input values
  const drugInput = document.getElementById('drug');
  const timeInput = document.getElementById('time');

  const drugName = drugInput.value.trim();
  const time = timeInput.value;

  // Simple check to make sure values are filled
  if (!drugName || !time) {
    alert('Please enter both the drug name and time.');
    return;
  }

  // Create reminder <li>
  const li = document.createElement('li');
  li.className = 'reminder';

  // Create a span to hold the text
  const reminderText = document.createElement('span');
  reminderText.textContent = `${drugName} @ ${time}`;

  // Create "Mark as Taken" button
  const markBtn = document.createElement('button');
  markBtn.textContent = '✔';
  markBtn.className = 'mark-btn';
  markBtn.onclick = () => {
    reminderText.classList.toggle('taken'); // Toggle class for styling
  };

  // Create "Delete" button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => {
    reminderList.removeChild(li); // Remove the reminder from the list
  };

  // Put everything into the <li>
  li.appendChild(reminderText);
  li.appendChild(markBtn);
  li.appendChild(deleteBtn);

  // Add the reminder to the list
  reminderList.appendChild(li);

  // Clear the form inputs
  drugInput.value = '';
  timeInput.value = '';
});
