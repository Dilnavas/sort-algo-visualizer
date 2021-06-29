import SyntaxHighlighter from 'react-syntax-highlighter'
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Description = ({ name, description, algorithm, code, subAlgorithm }) => {
  return (
    <div className='description'>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Algorithm</h3>
      {subAlgorithm &&
        subAlgorithm.map(({ heading, algorithm }) => {
          return (
            <>
              {' '}
              <h4>{heading}</h4>{' '}
              <ol>
                {algorithm.map((step, i) => (
                  <li key={`${i}`}>{step}</li>
                ))}
              </ol>
            </>
          )
        })}
      <ol>
        {algorithm.map((step, i) => (
          <li key={`${i}`}>{step}</li>
        ))}
      </ol>
      <h3>Source Code</h3>
      <div className='code-container'>
        <SyntaxHighlighter language='javascript' style={gruvboxDark}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Description
