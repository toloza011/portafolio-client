import React from 'react';


const Test = () =>{
    const names = ['James', 'John', 'Paul', 'Ringo', 'George'];


    return(
        <div className="about">
        {names.filter(name => name.includes('J')).map(filteredName => (
          <li>
            {filteredName}
          </li>
        ))}
      </div>
    )
}

export default Test;