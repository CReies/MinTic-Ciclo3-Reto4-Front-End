consultCategories = () => {
	$.ajax({
		url: 'http://168.138.144.212:8080/Category/all',
		type: 'get',
		datatype: 'application/JSON',
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

postCategory = (e) => {
	e.preventDefault();
	const data = {
		id: $('#categoryId').val(),
		name: $('#categoryName').val(),
		description: $('#categoryDescription').val(),
	};
	$.ajax({
		type: 'post',
		url: 'http://168.138.144.212:8080/Category/save',
		data: data,
		dataType: 'JSON',
		success: function (res) {
			$('#categoryId').val('');
			$('#categoryName').val('');
			$('#categoryDescription').val('');
			consultCategories();
		},
	});
};

consultBoats = () => {
	$.ajax({
		url: 'http://168.138.144.212:8080/Boat/all',
		type: 'get',
		datatype: 'JSON',
		success: function (res) {
			for (let i = 0; i < res.items.length; i++) {
				const boat = res.items[i];
				const tr = document.createElement('tr');
				const tdId = document.createElement('td');
				const tdBrand = document.createElement('td');
				const tdYear = document.createElement('td');
				const tdCategoryId = document.createElement('td');
				const tdName = document.createElement('td');
				const tdDescription = document.createElement('td');
				tdId.innerText = boat.id;
				tdBrand.innerText = boat.brand;
				tdYear.innerText = boat.year;
				tdCategoryId.innerText = boat.category.id;
				tdName.innerText = boat.name;
				tdDescription.innerText = boat.description;
				tr.appendChild(tdId);
				tr.appendChild(tdBrand);
				tr.appendChild(tdYear);
				tr.appendChild(tdCategoryId);
				tr.appendChild(tdName);
				tr.appendChild(tdDescription);
				document.getElementById('tbodyBoats').appendChild(tr);
			}
		},
	});
};

postBoat = (e) => {
	e.preventDefault();
	const data = {
		id: $('#boatId').val(),
		brand: $('#boatBrand').val(),
		year: $('#boatYear').val(),
		category: {
			id: $('#boatCategoryId').val(),
		},
		name: $('#boatName'),
		description: $('#boatDescription'),
	};
	$.ajax({
		type: 'post',
		url: 'http://168.138.144.212:8080/Boat/save',
		data: data,
		dataType: 'JSON',
		success: function (res) {
			$('#boatId').val('');
			$('#boatBrand').val('');
			$('#boatYear').val('');
			$('#boatCategoryId').val('');
			$('#boatName').val('');
			$('#boatDescription').val('');
			consultBoats();
		},
	});
};

consultClients = () => {
	$.ajax({
		url: 'http://168.138.144.212:8080/Client/all',
		type: 'get',
		datatype: 'JSON',
		success: function (res) {
			for (let i = 0; i < res.items.length; i++) {
				const client = res.items[i];
				const tr = document.createElement('tr');
				const tdId = document.createElement('td');
				const tdEmail = document.createElement('td');
				const tdPassword = document.createElement('td');
				const tdName = document.createElement('td');
				const tdAge = document.createElement('td');
				tdId.innerText = client.id;
				tdEmail.innerText = client.email;
				tdPassword.innerText = client.password;
				tdName.innerText = client.name;
				tdAge.innerText = client.age;
				tr.appendChild(tdId);
				tr.appendChild(tdEmail);
				tr.appendChild(tdPassword);
				tr.appendChild(tdName);
				tr.appendChild(tdAge);
				document.getElementById('tbodyClients').appendChild(tr);
			}
		},
	});
};

postClient = (e) => {
	e.preventDefault();
	const data = {
		id: $('#clientId').val(),
		email: $('#clientEmail').val(),
		password: $('#clientPassword').val(),
		name: $('#clientName').val(),
		age: $('#clientAge').val(),
	};
	$.ajax({
		type: 'post',
		url: 'http://168.138.144.212:8080/Client/save',
		data: data,
		dataType: 'JSON',
		success: function (res) {
			$('#clientId').val('');
			$('#clientEmail').val('');
			$('#clientPassword').val('');
			$('#clientName').val('');
			$('#clientAge').val('');
			consultClients();
		},
	});
};

consultMessages = () => {
	$.ajax({
		url: 'http://168.138.144.212:8080/Message/all',
		type: 'get',
		datatype: 'JSON',
		success: function (res) {
			for (let i = 0; i < res.items.length; i++) {
				const message = res.items[i];
				const tr = document.createElement('tr');
				const tdId = document.createElement('td');
				const tdMessageText = document.createElement('td');
				const tdBoatId = document.createElement('td');
				const tdClientId = document.createElement('td');
				tdId.innerText = message.id;
				tdMessageText.innerText = message.messagetext;
				tdBoatId.innerText = message.boat.id;
				tdClientId.innerText = message.client.id;
				tr.appendChild(tdId);
				tr.appendChild(tdMessageText);
				tr.appendChild(tdBoatId);
				tr.appendChild(tdClientId);
				document.getElementById('tbodyMessages').appendChild(tr);
			}
		},
	});
};

postMessageText = (e) => {
	e.preventDefault();
	const data = {
		id: $('#messageId').val(),
		messagetext: $('#messageMessageText').val(),
		boat: {
			id: $('#messageBoatId').val(),
		},
		client: {
			id: $('#messageClientId').val(),
		},
	};
	$.ajax({
		type: 'post',
		url: 'http://168.138.144.212:8080/Message/save',
		data: data,
		dataType: 'JSON',
		success: function (res) {
			$('#messageId').val('');
			$('#messageMessageText').val('');
			$('#messageBoatId').val('');
			$('#messageClientId').val('');
			consultMessages();
		},
	});
};

consultReservations = () => {
	$.ajax({
		url: 'http://168.138.144.212:8080/Reservation/all',
		type: 'get',
		datatype: 'JSON',
		success: function (res) {
			for (let i = 0; i < res.items.length; i++) {
				const reservation = res.items[i];
				const tr = document.createElement('tr');
				const tdId = document.createElement('td');
				const tdStartDate = document.createElement('td');
				const tdDevolutionDate = document.createElement('td');
				const tdBoatId = document.createElement('td');
				const tdClientId = document.createElement('td');
				const tdScore = document.createElement('td');
				tdId.innerText = reservation.id;
				tdStartDate.innerText = reservation.startDate;
				tdDevolutionDate.innerText = reservation.devolutionDate;
				tdBoatId.innerText = reservation.boat.id;
				tdClientId.innerText = reservation.client.id;
				tdScore.innerText = reservation.score;
				tr.appendChild(tdId);
				tr.appendChild(tdStartDate);
				tr.appendChild(tdDevolutionDate);
				tr.appendChild(tdBoatId);
				tr.appendChild(tdClientId);
				tr.appendChild(tdScore);
				document.getElementById('tbodyReservations').appendChild(tr);
			}
		},
	});
};

postReservation = (e) => {
	e.preventDefault();
	const data = {
		id: $('#reservationId').val(),
		startDate: $('#reservationStartDate').val(),
		devolutionDate: $('#reservationDevolutionDate').val(),
		boat: {
			id: $('#reservationBoatId').val(),
		},
		client: {
			id: $('#reservationClientId').val(),
		},
		score: $('reservationScore').val(),
	};
	$.ajax({
		type: 'post',
		url: 'http://168.138.144.212:8080/Reservation/save',
		data: data,
		dataType: 'JSON',
		success: function (res) {
			$('#reservationId').val('');
			$('#reservationStartDate').val('');
			$('#reservationDevolutionDate').val('');
			$('#reservationBoatId').val('');
			$('#reservationClientId').val('');
			$('#reservationScore').val('');
      consultReservations();
		},
	});
};
