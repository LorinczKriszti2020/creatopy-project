import { useState } from "react"
import Canvas from "./Canvas"
import { StyledGenerated } from "./styles/Generated.styled"

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

const Generated = ({title, setTitle, description, setDescription, CTA, setCTA ,image, setImage, prompt, setPrompt}: Props) => {
  const [titleArea, setTitleArea] = useState<string>("")
  const [descriptionArea, setDescriptionArea] = useState<string>("")
  const [CTAArea, setCTAArea] = useState<string>("")

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

  async function elementGeneration(element: string){
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

    if(element === 'title'){
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
        setTitle(data.choices[0].message.content.replace(`"`, '').replace(`"`, ''));
      })
    }
    if(element === 'description'){
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
        setTitle(data.choices[0].message.content.replace(`"`, '').replace(`"`, ''));
      })
    }
    if(element === 'CTA'){
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
        setTitle(data.choices[0].message.content.replace(`"`, '').replace(`"`, ''));
      })
    }
  }

  return (
    <StyledGenerated>
      <Canvas title={title} description={description} CTA={CTA} image={image} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{CTA}</p>
      </div>
      <div>
        <button onClick={() => toggleHidden('title-div')}>Change title</button>
          <div id="title-div" className="cont hidden">
            <button onClick={() => elementGeneration('title')}>Generate new title</button>
            <p> or</p>
            <div>
              <textarea 
                onChange={(e) => setTitleArea(e.target.value)}
                maxLength={50}
                >
              </textarea>
              <button onClick={() => setTitle(titleArea)}>Change title</button>
            </div>
          </div>
        <button onClick={() => toggleHidden('description-div')}>Change description</button>
          <div id="description-div" className="cont hidden">
            <button onClick={() => elementGeneration('description')}>Generate new description</button>
            <p> or</p>
            <div>
              <textarea 
                onChange={(e) => setDescriptionArea(e.target.value)}
                maxLength={256}>
              </textarea>
              <button onClick={() => setDescription(descriptionArea)}>Change description</button>
            </div>
          </div>
        <button onClick={() => toggleHidden('CTA-div')}>Change CTA text</button>
          <div id="CTA-div" className="cont hidden">
            <button onClick={() => elementGeneration('CTA')}>Generate new CTA text</button>
            <p> or</p>
            <div>
              <textarea 
                onChange={(e) => setCTAArea(e.target.value)}
                maxLength={50}>
              </textarea>
              <button onClick={() => setCTA(CTAArea)}>Change CTA text</button>
            </div>
          </div>
        <button>Download Ad</button>
      </div>
    </StyledGenerated>
  )
}

const titleElem = document.getElementById('title-div')
const descriptionElem = document.getElementById('description-div')
const imageElem = document.getElementById('image-div')
const CTAElem = document.getElementById('CTA-div')

function toggleHidden(id) {
  document.getElementById(`${id}`).classList.toggle('hidden');
}

export default Generated
