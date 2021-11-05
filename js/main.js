consultCategories = () => {
	$.ajax({
		type: 'GET',
		url: 'http://168.138.144.212:8080/Category/all',
		success: function (res) {
			for (let i = 0; i < res.items.length; i++) {
				const cat = res.items[i];
				const tr = document.createElement('tr');
				const tdId = document.createElement('td');
				const tdName = document.createElement('td');
				const tdDesc = document.createElement('td');
				tdId.innerText = cat.id;
				tdName.innerText = cat.name;
				tdDesc.innerText = cat.description;
				tr.appendChild(tdId);
				tr.appendChild(tdName);
				tr.appendChild(tdDesc);
				document.getElementById('tbodyCategories').appendChild(tr);
			}
		},
	});
};
