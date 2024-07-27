document.addEventListener('DOMContentLoaded', function () {
    const fetchDogImageButton = document.getElementById('fetch-dog-image');
    const dogImageContainer = document.getElementById('dog-image-container');

    fetchDogImageButton.addEventListener('click', function () {
        fetchDogImage();
    });

    function fetchDogImage() {
        const url = 'https://api.thedogapi.com/v1/images/search';

        axios.get(url)
            .then(response => {
                if (response.data.length > 0) {
                    displayDogImage(response.data[0]);
                } else {
                    displayError('No dog images found. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error fetching the dog image:', error);
                displayError('Could not fetch dog image. Please try again later.');
            });
    }

    function displayDogImage(data) {
        const { url } = data;
        dogImageContainer.innerHTML = `
            <img src="${url}" alt="Random Dog Image" class="max-w-xs rounded-lg shadow-lg">
            <p class="mt-4 text-gray-700">Here's a random dog image for you!</p>
        `;
    }

    function displayError(message) {
        dogImageContainer.innerHTML = `<p class="text-red-500">${message}</p>`;
    }
});
