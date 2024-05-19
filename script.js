// Simple event calendar implementation using JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar-container');

    const events = [
        { date: '2024-07-20', title: 'Anime Expo 2024' },
        { date: '2024-08-15', title: 'Cosplay Workshop' },
        { date: '2024-10-31', title: 'Halloween Cosplay Party' }
    ];

    function renderCalendar(events) {
        const calendarTable = document.createElement('table');
        const headerRow = document.createElement('tr');
        const headers = ['Date', 'Event'];

        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        calendarTable.appendChild(headerRow);

        events.forEach(event => {
            const row = document.createElement('tr');
            const dateCell = document.createElement('td');
            dateCell.textContent = event.date;
            const titleCell = document.createElement('td');
            titleCell.textContent = event.title;
            row.appendChild(dateCell);
            row.appendChild(titleCell);
            calendarTable.appendChild(row);
        });

        calendarContainer.appendChild(calendarTable);
    }

    renderCalendar(events);
});
