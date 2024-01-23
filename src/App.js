// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';



//   const OnOffButton = () => {
//     const [isOn, setIsOn] = useState(false);

//     const handleToggle = () => {
//       setIsOn((prevIsOn) => !prevIsOn);
//     }
//   }
 
//   return (
//     <div>
//       <p>The button is {isOn ? 'on' : 'off'}. </p>
//       <button onClick={handleToggle}> {isOn ? 'Turn Off' : 'Turn On'} </button>
//     </div>
//   );


// export default OnOffButton;
import React, { useState } from 'react';

const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1', completed: false },
    { id: 2, text: 'Item 2', completed: false },
    { id: 3, text: 'Item 3', completed: false },
  ]);

  const toggleCompletion = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <h1>Checklist</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleCompletion(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
