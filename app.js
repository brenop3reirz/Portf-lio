async function fetchWeather(city) {
    const apiKey = 'SUA_CHAVE_AQUI';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Cidade não encontrada ou erro na API');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        displayError(error.message);
    }
}


3.2	Função axiosWeather: essa função faz a mesma requisição usando axios.
async function axiosWeather(city) {
    const apiKey = 'SUA_CHAVE_AQUI';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await axios.get(url);
        displayWeather(response.data);
    } catch (error) {2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        if (error.response) {
            displayError('Erro: ' + (error.response.data.message || 'Cidade não encontrada ou erro na API'));
        } else {
            displayError(error.message);
        }
    }
}
