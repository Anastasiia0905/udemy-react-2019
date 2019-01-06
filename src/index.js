// Import React and ReactDOM libraries
import  React from 'react'
import ReactDOM from 'react-dom'
// Create React Component
function  getButtonText(){
    return 'Click on me!'
}
const App = () => {
        
        return <div>
            <label className='label' htmlFor='name'>
                Enter name:
            </label>
            <input id='label' type='text'/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}
            </button>
        </div>
}
//Take React Component and render to the page
ReactDOM.render(<App />, document.getElementById('root'));
