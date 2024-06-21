document.addEventListener('DOMContentLoaded', function() {
    var tables = document.querySelectorAll('.dynamic-table');

    tables.forEach(function(table) {
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
    });

    var cells = document.querySelectorAll('.dynamic-table td, .dynamic-table th');

    cells.forEach(function(cell) {
        cell.style.border = '1px solid black';
        cell.style.padding = '10px';
    });
});

