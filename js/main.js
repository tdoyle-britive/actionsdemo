document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('departments');

  // Fetch departments from JSON
  fetch('config/departments.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load departments');
      return response.json();
    })
    .then(departments => {
      container.innerHTML = ''; // Clear loading

      departments.forEach(dept => {
        const card = document.createElement('div');
        card.className = 'dept-card';

        card.innerHTML = `
          <img src="${dept.image}" alt="${dept.name} Icon" class="dept-icon">
          <h3>${dept.name}</h3>
          <p>${dept.description}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      container.innerHTML = `<div class="loading">Error: ${err.message}</div>`;
      console.error(err);
    });
});
