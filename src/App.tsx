import { FC, useState } from 'react';
import Navbar from './components/Navbar';
import { GlobalStyles } from './components/styles/Global';
import {ThemeProvider} from 'styled-components'
import Main from './components/Main';
import Generated from './components/Generated';

export const App: FC<{ name: string }> = ({ name }) => {
  const theme = {
    colors:{
      header: '#ebfbff',
      body: '#faf7f8',
      footer: '#107474',
      primary: '#F689A0',
    },
    mobile: '768px',
  }

  const [image, setImage] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [CTA, setCTA] = useState<string>("")
  const [prompt, setPrompt] = useState("")

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar theme={theme}/>
      <Main title={title} setTitle={setTitle} description={description} setDescription={setDescription} CTA={CTA} setCTA={setCTA} image={image} setImage={setImage} prompt={prompt} setPrompt={setPrompt}/>
      <Generated title={title} setTitle={setTitle} description={description} setDescription={setDescription} CTA={CTA} setCTA={setCTA} image={image} setImage={setImage} prompt={prompt} setPrompt={setPrompt}/>
    </ThemeProvider>
  );
};
