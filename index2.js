$(function() {
    $("#direction").selectmenu();
    updateDataList();
});

function validateForm() {
    var location = document.getElementById('location').value;
    var direction = document.getElementById('direction').value;
    var whatIsFlying = document.getElementById('whatIsFlying').value;

    if (!location || !direction || !whatIsFlying) {
        alert('Будь ласка, заповніть всі поля форми.');
        return false;
    }

    saveAndDisplayData(location, direction, whatIsFlying);

    document.getElementById('location').value = '';
    document.getElementById('direction').value = 'north';
    document.getElementById('whatIsFlying').value = '';

    return false;
}

function saveAndDisplayData(location, direction, whatIsFlying) {
    var savedData = {
        location: location,
        direction: direction,
        whatIsFlying: whatIsFlying,
        dateTime: new Date().toLocaleString()
    };

    var previousData = localStorage.getItem('savedDataList');
    var dataList = previousData ? JSON.parse(previousData) : [];
    dataList.push(savedData);
    localStorage.setItem('savedDataList', JSON.stringify(dataList));

    updateDataList();
}

function updateDataList() {
    var dataList = document.getElementById('savedDataList');
    dataList.innerHTML = '';

    var savedData = localStorage.getItem('savedDataList');
    if (savedData) {
        savedData = JSON.parse(savedData);

        savedData.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="data-item">
                    <span>Населений пункт: ${item.location}</span>
                    <span>В яку сторону: ${item.direction}</span>
                    <span>Що летить: ${item.whatIsFlying}</span>
                    <span>Дата та час: ${item.dateTime}</span>
                </div>
                <hr>
            `;

            dataList.appendChild(listItem);
        });
    }
}

function toggleHistory() {
    var historyContainer = document.querySelector('.data-container');
    historyContainer.style.display = historyContainer.style.display === 'none' ? 'block' : 'none';
}