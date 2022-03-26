import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import logo from './logo.svg';

const name = "App"

type LogoProps = {
  load: {}
  title: string
}

function Logo(props: LogoProps) {
  const { load, title } = props
  
  return <span>{title} | bla: {JSON.stringify(load)}</span>
}

function App() {
  // behavior declaration
  const onClickImage = useCallback((e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    debugger;
    console.log({
      alt: e.currentTarget.getAttribute("alt")
    })
  }, [])
  const ref = useRef<HTMLImageElement>(null!)
  const [age, setAge] = useState<number | null>(null)
  useEffect(() => {
    const image = ref.current
    console.log("UseEffect:", {
      alt: image.getAttribute("alt"),
      age,
      name,
    })
    setAge(oldAge => (oldAge ?? 0) % 2)
    // setAge(0)
    // setAge(null)
  }, [age])
  const load = useMemo(() => ({}), [])
  
  // useContext
  // useReducer

  
  // return markup
  return (
    <div className="App">
      <header className="App-header">
        <Logo title="Awesome title" load={load} />
        <img ref={ref} onClick={onClickImage} src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export { App };
