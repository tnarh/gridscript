document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('cellTable');

    for (let i = 0; i < 100; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            cell.innerHTML = `<input id="cell-${i}-${j}" class="cells-input" placeholder="(${i},${j})">`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
});