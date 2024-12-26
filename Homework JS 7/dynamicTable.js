function generateTable() {
    let rows = document.getElementById('rows').value;
    let cols = document.getElementById('cols').value;
    let table = '<table>';
    for (let i = 0; i < rows; i++) {
        table += '<tr>';
        for (let j = 0; j < cols; j++) {
            table += `<td>Row ${i + 1}, Column ${j + 1}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';
    let tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = table;
}  