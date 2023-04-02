import './App.css';
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import Translation from './components/LandingPage';
import FrontPage from './components/FrontPage/FrontPage';

function App() {
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_Open_AI_Key); // state for storing the API key
  const [result, setResult] = useState('Your text summary will be visible here. Make sure you entered more than ten words.');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const configuration = new Configuration({ apiKey });
  const openai = new OpenAIApi(configuration);

  const doStuff = async () => {
    setIsLoading(true);
  
    const inputTrimmed = input.trim();
  
    if (inputTrimmed.length < 10 || !/[a-zA-Z]/.test(inputTrimmed)) {
      setResult("Please type correct text. The text must be more than ten words.");
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${input}\n\nSummarize the above text to 30% of its length.`,
        temperature: 0,
        max_tokens: Math.floor(inputTrimmed.split(' ').length * 0.3),
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      setResult(response.data.choices[0].text);
    } catch (error) {
      setResult("Error: " + "Please enter valid text and be sure it is longer than 10 words.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <FrontPage />
      <Translation doStuff={doStuff} setInput={setInput} result={result} isLoading={isLoading} />
    </div>
  );
}

export default App;
