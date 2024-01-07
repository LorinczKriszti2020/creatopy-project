import { useState } from "react"
import { StyledMain } from "./styles/Main.styled"

interface Props {
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  description: string,
  setDescription: React.Dispatch<React.SetStateAction<string>>,
  CTA: string,
  setCTA: React.Dispatch<React.SetStateAction<string>>,
  image: string,
  setImage: React.Dispatch<React.SetStateAction<string>>,
  prompt: string,
  setPrompt: React.Dispatch<React.SetStateAction<string>>,
}

interface Sizes{
  500: string,
  1500: string,
  1080: string,
}

const Main = ({title, setTitle, description, setDescription, CTA, setCTA ,image, setImage, prompt, setPrompt}: Props) => {
  async function callOpenAIApi() {
    let size = findSize()
    const sizes: Sizes = {
      500: '1024x1024',
      1500: '1024x1024',
      1080: '1024x1792'
    }
    if(!size) size = "500"

    const imageAPIBody = {
      "model": "dall-e-3",
      "prompt": "Generate an advertisement without words about a company that " + prompt,
      "n": 1,
      "size": '' + sizes[size]
    }
  
    //couldn't manage to get chatgpt to generate 3 different messages to 3 different prompts in one single call
    const titleAPIBody = {
      "model": "gpt-4",
      "messages": [
        {role: 'user', content: 'Generate a short advertisement title for a business that ' + prompt}
      ],
    }
    const descriptionAPIBody = {
      "model": "gpt-4",
      "messages": [
        {role: 'user', content: 'Generate an advertisement description of maximum 30 words for a business that ' + prompt},
      ],
    }
    const callToActionAPIBody = {
      "model": "gpt-4",
      "messages": [
        {role: 'user', content: 'Generate an advertisement call to action button for a business that '  + prompt}
      ],
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers:{
        "Content-type": "application/json",
        "Authorization": "Bearer " + process.env.REACT_APP_OPEN_AI_API_KEY
      },
      body: JSON.stringify(titleAPIBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setTitle(data.choices[0].message.content)
    })

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers:{
        "Content-type": "application/json",
        "Authorization": "Bearer " + process.env.REACT_APP_OPEN_AI_API_KEY
      },
      body: JSON.stringify(descriptionAPIBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setDescription(data.choices[0].message.content)
    })

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers:{
        "Content-type": "application/json",
        "Authorization": "Bearer " + process.env.REACT_APP_OPEN_AI_API_KEY
      },
      body: JSON.stringify(callToActionAPIBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setCTA(data.choices[0].message.content)
    })

    await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers:{
        "Content-type": "application/json",
        "Authorization": "Bearer " + process.env.REACT_APP_OPEN_AI_API_KEY
      },
      body: JSON.stringify(imageAPIBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setImage(data.data[0].url.replace(`"`, '').replace(`"`, ''))
    })
  }

  function selectDiv(size: string) {
    //document.getElementById(`${size}`).classList.toggle('selected')
    const x500 = document.getElementById('500')
    const x1500 = document.getElementById('1500')
    const x1080 = document.getElementById('1080')
    const sizes = [x500, x1500, x1080]

    sizes.forEach(element => {
      if(size == element.id){
        element.classList.add('selected')
      }else{
        element.classList.remove('selected')
      }
    });
  }

  function findSize(): string  {
    const x500 = document.getElementById('500')
    const x1500 = document.getElementById('1500')
    const x1080 = document.getElementById('1080')
    const sizes = [x500, x1500, x1080]
    let toReturn
    let found = false

    sizes.forEach(element => {
      if(element.classList.contains('selected')){
        toReturn = element.id;
      }
    });
    return toReturn
  }
  

  return (
    <StyledMain>
      <h2>Get to generating!</h2>
      <p>Introduce a prompt below and watch the ad of your dreams be generated in just a moment!</p>
      <textarea
        onChange={(e) => setPrompt(e.target.value)}
        maxLength={256}
        placeholder="Describe your company in a few words...">
      </textarea>
      <p>Choose a template:</p>
      <div>
        <div id="500" onClick={() => selectDiv('500')}>
          <p>Instagram 500x500</p>
          <img src="./images/500-placeholder.jpg" className="instagram"/>
        </div>
        <div id="1080" onClick={() => selectDiv('1080')}>
          <p>Story 1080x1920</p>
          <img src="./images/1080-placeholder.jpg" className="story" />
        </div>
        <div id="1500" onClick={() => selectDiv('1500')}>
          <p>Twitter 1500x1500</p>
          <img src="./images/1500-placeholder.png" className="twitter" />
        </div>
      </div>
      <button onClick={() => callOpenAIApi()}>Generate</button>
    </StyledMain>
  )
}

export default Main