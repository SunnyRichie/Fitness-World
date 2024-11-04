// Select all necessary elements
const elements = {
  headings: [
    document.getElementById('head1'),
    document.getElementById('head2'),
    document.getElementById('head3'),
    document.getElementById('head4')
  ],
  trainingContainers: [
    document.getElementById('training1'),
    document.getElementById('training2'),
    document.getElementById('training3'),
    document.getElementById('training4')
  ],
  days: {
    monday: document.getElementById('monday'),
    tuesday: document.getElementById('tuesday'),
    wednesday: document.getElementById('wednesday'),
    thursday: document.getElementById('thursday'),
    friday: document.getElementById('friday')
  },
  timeSlots: {
    r1: [document.getElementById('r1time1'), document.getElementById('r1time2')],
    r2: [document.getElementById('r2time1'), document.getElementById('r2time2')],
    r3: [document.getElementById('r3time1'), document.getElementById('r3time2')],
    r4: [document.getElementById('r4time1'), document.getElementById('r4time2')],
    r5: [document.getElementById('r5time1'), document.getElementById('r5time2')]
  },
  sidebar: {
    menu: document.getElementById('sidebarmenu'),
    sidebar: document.getElementById('sidebar'),
    closebar: document.getElementById('closebar')
  },
  header: document.getElementById('header')
};

// Function to reset time slots
function resetTimeSlots() {
  for (const timeSlot in elements.timeSlots) {
    elements.timeSlots[timeSlot].forEach(slot => slot.textContent = '');
  }
}

// Event listeners for days
const dayEventListeners = {
  monday: () => {
    resetTimeSlots();
    elements.timeSlots.r1[0].textContent = '10:00AM - 11:30AM';
    elements.timeSlots.r3[1].textContent = '2:00PM - 3:30PM';
  },
  tuesday: () => {
    resetTimeSlots();
    elements.timeSlots.r1[1].textContent = '2:00PM - 3:30PM';
    elements.timeSlots.r3[0].textContent = '10:00AM - 11:30AM';
  },
  wednesday: () => {
    resetTimeSlots();
    elements.timeSlots.r4[0].textContent = '10:00AM - 11:30AM';
    elements.timeSlots.r5[1].textContent = '2:00PM - 3:30PM';
  },
  thursday: () => {
    resetTimeSlots();
    elements.timeSlots.r5[0].textContent = '10:00AM - 11:30AM';
    elements.timeSlots.r2[1].textContent = '2:00PM - 3:30PM';
  },
  friday: () => {
    resetTimeSlots();
    elements.timeSlots.r2[1].textContent = '2:00PM - 3:30PM';
    elements.timeSlots.r4[1].textContent = '10:00AM - 11:30AM';
  }
};

// Attach event listeners to day buttons
for (const [day, handler] of Object.entries(dayEventListeners)) {
  elements.days[day].addEventListener('click', handler);
}

// Function to display training sections
function displayTrainingSection(index) {
  elements.trainingContainers.forEach((container, idx) => {
    container.style.display = idx === index ? 'inline-block' : 'none';
  });
}

// Attach event listeners to heading buttons
elements.headings.forEach((heading, index) => {
  heading.addEventListener('click', () => displayTrainingSection(index));
});

// Sidebar functions
function showSideBar() {
  elements.sidebar.menu.style.display = 'flex';
  elements.sidebar.closebar.style.visibility = 'visible';
  elements.sidebar.sidebar.style.visibility = 'hidden';
}

function closeSideBar() {
  elements.sidebar.menu.style.visibility = 'hidden';
  elements.sidebar.sidebar.style.visibility = 'visible';
  elements.sidebar.closebar.style.visibility = 'hidden';
}

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
  elements.header.classList.toggle('sticky', window.scrollY > 7);
});
