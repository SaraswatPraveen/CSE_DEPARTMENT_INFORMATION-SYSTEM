document.addEventListener('DOMContentLoaded',function () {
    fetch('http://localhost:5000/getAll_b_4')
    .then(response=>response.json())
    .then(data=>loadHTMLTable(data['data']));
});
function loadHTMLTable(data){
    const table=document.querySelector('table tbody');
    console.log(data);
    if(data.length === 0){
        table.innerHTML="<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }
    let tableHtml="";
    data.forEach(function({ID,NAME,ROLL,SCGP,STATE}){
        tableHtml+="<tr>";
        tableHtml+=`<td>${ID}</td>`;
        tableHtml+=`<td>${NAME}</td>`;
        tableHtml+=`<td>${ROLL}</td>`;
        tableHtml+=`<td>${SCGP}</td>`;
        tableHtml+=`<td>${STATE}</td>`;
        tableHtml+="</tr>";
    });
    table.innerHTML=tableHtml;
}