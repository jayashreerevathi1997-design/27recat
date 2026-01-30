import { useState } from 'react';
import './27.css';

// Task 41: Simple greeting component
function Greeting({ name }) {
  return <p className="greeting">Hello, {name}! Welcome!</p>;
}

// Task 46: Simple footer component
function Footer() {
  return <footer className="footer">Footer Component - All Rights Reserved 2024</footer>;
}

// Task 47: Header component
function Header() {
  return <header className="header">Header Component - React 50 Tasks Demo</header>;
}

// Task 49: Simple card layout
function Card({ title, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

// Task 29, 30: Child component receiving props
function ChildComponent({ message, color }) {
  return (
    <div style={{ color: color }}>
      <p>Props received: {message}</p>
    </div>
  );
}

// Main Component with all 50 tasks
function ReactTasks() {
  // Task 8, 9, 10, 11: Counter states
  const [number, setNumber] = useState(0);

  // Task 6, 7: Text toggle states
  const [buttonText, setButtonText] = useState('Click Me');
  const [showText, setShowText] = useState(true);

  // Task 12, 13, 14, 15, 16: Input states
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  // Task 20: Conditional message state
  const [showMessage, setShowMessage] = useState(false);

  // Task 21: Background color state
  const [bgColor, setBgColor] = useState('white');

  // Task 22, 23: Button disable state
  const [isDisabled, setIsDisabled] = useState(false);

  // Task 25: Image visibility state
  const [showImage, setShowImage] = useState(true);

  // Task 26, 27: Login form states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submittedUser, setSubmittedUser] = useState('');

  // Task 33, 34: Single button counter
  const [singleCounter, setSingleCounter] = useState(0);

  // Task 35: Toggle text state
  const [toggleState, setToggleState] = useState(true);

  // Task 36, 37: Checkbox state
  const [isChecked, setIsChecked] = useState(false);

  // Task 38: Dropdown state
  const [selectedOption, setSelectedOption] = useState('');

  // Task 39: Heading text state
  const [headingText, setHeadingText] = useState('Original Heading');

  // Task 42: Conditional render state
  const [showComponent, setShowComponent] = useState(true);

  // Task 45: Total clicks state
  const [totalClicks, setTotalClicks] = useState(0);

  // Task 50: Combined component states
  const [combinedInput, setCombinedInput] = useState('');
  const [combinedOutput, setCombinedOutput] = useState('');

  // Task 17, 18, 19: Fruits array
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

  // Task 26, 27: Handle login submit
  const handleLogin = (e) => {
    e.preventDefault();
    setSubmittedUser(username);
  };

  // Task 44, 45: Handle multiple button clicks
  const handleButtonClick = (buttonNum) => {
    setTotalClicks(prev => prev + 1);
    alert(`Button ${buttonNum} clicked!`);
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      {/* Task 1: Hello React */}
      <section className="task-section">
        <h2>Task 1: Hello React</h2>
        <p>Hello React</p>
      </section>

      {/* Task 2 & 3: Functional component with name */}
      <section className="task-section">
        <h2>Task 2 & 3: Display Name</h2>
        <p>My name is Jayashree</p>
      </section>

      {/* Task 4: Today's date */}
      <section className="task-section">
        <h2>Task 4: Today's Date</h2>
        <p>{new Date().toLocaleDateString()}</p>
      </section>

      {/* Task 5 & 6: Button with text */}
      <section className="task-section">
        <h2>Task 5 & 6: Button with Changing Text</h2>
        <button onClick={() => setButtonText(buttonText === 'Click Me' ? 'Clicked!' : 'Click Me')}>
          {buttonText}
        </button>
        <p>Text below button</p>
      </section>

      {/* Task 7: Show/Hide text */}
      <section className="task-section">
        <h2>Task 7: Show/Hide Text</h2>
        <button onClick={() => setShowText(!showText)}>
          {showText ? 'Hide' : 'Show'} Text
        </button>
        {showText && <p>This text can be hidden!</p>}
      </section>

      {/* Task 8, 9, 10, 11: Number with useState */}
      <section className="task-section">
        <h2>Task 8-11: Counter</h2>
        <p>Number: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Increase</button>
        <button onClick={() => setNumber(number - 1)}>Decrease</button>
        <button onClick={() => setNumber(0)}>Reset</button>
      </section>

      {/* Task 12, 13, 14: Input field */}
      <section className="task-section">
        <h2>Task 12-14: Input Field</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text"
        />
        <button onClick={() => setInputValue('')}>Clear</button>
        <p>Entered: {inputValue}</p>
      </section>

      {/* Task 15, 16: Text case conversion */}
      <section className="task-section">
        <h2>Task 15 & 16: Case Conversion</h2>
        <input
          type="text"
          value={displayValue}
          onChange={(e) => setDisplayValue(e.target.value)}
          placeholder="Enter text to convert"
        />
        <button onClick={() => setDisplayValue(displayValue.toUpperCase())}>Uppercase</button>
        <button onClick={() => setDisplayValue(displayValue.toLowerCase())}>Lowercase</button>
        <p>Result: {displayValue}</p>
      </section>

      {/* Task 17, 18, 19: List of fruits with map */}
      <section className="task-section">
        <h2>Task 17-19: Fruits List</h2>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{index + 1}. {fruit}</li>
          ))}
        </ul>
      </section>

      {/* Task 20: Conditional message */}
      <section className="task-section">
        <h2>Task 20: Conditional Message</h2>
        <button onClick={() => setShowMessage(!showMessage)}>
          Toggle Message
        </button>
        {showMessage && <p className="message">This is a conditional message!</p>}
      </section>

      {/* Task 21: Change background color */}
      <section className="task-section">
        <h2>Task 21: Background Color</h2>
        <button onClick={() => setBgColor(bgColor === 'white' ? 'lightblue' : 'white')}>
          Change Background
        </button>
      </section>

      {/* Task 22, 23: Disable/Enable button */}
      <section className="task-section">
        <h2>Task 22 & 23: Disable/Enable Button</h2>
        <button disabled={isDisabled}>
          {isDisabled ? 'Disabled' : 'Enabled'} Button
        </button>
        <button onClick={() => setIsDisabled(true)}>Disable</button>
        <button onClick={() => setIsDisabled(false)}>Enable</button>
      </section>

      {/* Task 24, 25: Image display */}
      <section className="task-section">
        <h2>Task 24 & 25: Image</h2>
        <button onClick={() => setShowImage(!showImage)}>
          {showImage ? 'Hide' : 'Show'} Image
        </button>
        {showImage && (
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="sample-image"
          />
        )}
      </section>

      {/* Task 26, 27: Login form */}
      <section className="task-section">
        <h2>Task 26 & 27: Login Form</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {submittedUser && <p>Welcome, {submittedUser}!</p>}
      </section>

      {/* Task 28: Two components rendered */}
      <section className="task-section">
        <h2>Task 28: Two Components</h2>
        <Header />
        <Footer />
      </section>

      {/* Task 29, 30: Props */}
      <section className="task-section">
        <h2>Task 29 & 30: Props</h2>
        <ChildComponent message="Hello from Parent!" color="blue" />
      </section>

      {/* Task 31: Inline style */}
      <section className="task-section">
        <h2>Task 31: Inline Style</h2>
        <p style={{ color: 'red', fontWeight: 'bold' }}>This text is red with inline style</p>
      </section>

      {/* Task 32: CSS class */}
      <section className="task-section">
        <h2>Task 32: CSS Class</h2>
        <p className="styled-text">This text uses a CSS class</p>
      </section>

      {/* Task 33, 34: Single button counter with Even/Odd */}
      <section className="task-section">
        <h2>Task 33 & 34: Counter with Even/Odd</h2>
        <p>Count: {singleCounter} - {singleCounter % 2 === 0 ? 'Even' : 'Odd'}</p>
        <button onClick={() => setSingleCounter(singleCounter + 1)}>Count</button>
      </section>

      {/* Task 35: Toggle between texts */}
      <section className="task-section">
        <h2>Task 35: Toggle Texts</h2>
        <p>{toggleState ? 'Text A' : 'Text B'}</p>
        <button onClick={() => setToggleState(!toggleState)}>Toggle</button>
      </section>

      {/* Task 36, 37: Checkbox */}
      <section className="task-section">
        <h2>Task 36 & 37: Checkbox</h2>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          Check me
        </label>
        <p>Status: {isChecked ? 'Checked' : 'Unchecked'}</p>
        {isChecked && <p className="message">Checkbox is checked!</p>}
      </section>

      {/* Task 38: Dropdown */}
      <section className="task-section">
        <h2>Task 38: Dropdown</h2>
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <p>Selected: {selectedOption || 'None'}</p>
      </section>

      {/* Task 39: Change heading */}
      <section className="task-section">
        <h2>Task 39: Change Heading</h2>
        <h3>{headingText}</h3>
        <button onClick={() => setHeadingText('New Heading!')}>Change Heading</button>
        <button onClick={() => setHeadingText('Original Heading')}>Reset Heading</button>
      </section>

      {/* Task 40: Ternary operator */}
      <section className="task-section">
        <h2>Task 40: Ternary Operator</h2>
        <p>{number > 5 ? 'Number is greater than 5' : 'Number is 5 or less'}</p>
      </section>

      {/* Task 41: Greeting component */}
      <section className="task-section">
        <h2>Task 41: Greeting Component</h2>
        <Greeting name="Jayashree" />
      </section>

      {/* Task 42: Conditional render */}
      <section className="task-section">
        <h2>Task 42: Conditional Render</h2>
        <button onClick={() => setShowComponent(!showComponent)}>
          {showComponent ? 'Hide' : 'Show'} Component
        </button>
        {showComponent && <Card title="Conditional Card" content="This card renders conditionally" />}
      </section>

      {/* Task 43, 44, 45: Multiple buttons with click events */}
      <section className="task-section">
        <h2>Task 43-45: Multiple Buttons</h2>
        <div className="button-group">
          <button onClick={() => handleButtonClick(1)}>Button 1</button>
          <button onClick={() => handleButtonClick(2)}>Button 2</button>
          <button onClick={() => handleButtonClick(3)}>Button 3</button>
        </div>
        <p>Total Clicks: {totalClicks}</p>
      </section>

      {/* Task 46: Footer (already rendered above) */}
      {/* Task 47: Header (already rendered above) */}

      {/* Task 48: Reuse component */}
      <section className="task-section">
        <h2>Task 48: Reused Components</h2>
        <Card title="Card 1" content="First reused card" />
        <Card title="Card 2" content="Second reused card" />
        <Card title="Card 3" content="Third reused card" />
      </section>

      {/* Task 49: Card layout (used above) */}

      {/* Task 50: Combined input, button, output */}
      <section className="task-section">
        <h2>Task 50: Combined Component</h2>
        <div className="combined-component">
          <input
            type="text"
            value={combinedInput}
            onChange={(e) => setCombinedInput(e.target.value)}
            placeholder="Type something"
          />
          <button onClick={() => setCombinedOutput(combinedInput)}>Submit</button>
          <button onClick={() => { setCombinedInput(''); setCombinedOutput(''); }}>Clear</button>
          <p>Output: {combinedOutput}</p>
        </div>
      </section>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default ReactTasks;
