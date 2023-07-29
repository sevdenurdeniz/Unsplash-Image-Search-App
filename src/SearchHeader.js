import { useState } from "react";

function SearchHeader({search}) {

    const [valueInput, setValue] = useState(``)
    const handleFormSubmit =(event)=>{
        event.preventDefault();
      search(valueInput);
    };

    const handleChange=(event)=>{
        setValue(event.target.value); //inputa yazılan değeri aldım
    };
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleFormSubmit}>
          <div className="col-12 mt-5">
            <div className="mb-3">
              <label className="form-label">Ne arıyorsunuz ?</label>
              <input value={valueInput} onChange={handleChange} type="text" className="form-control" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchHeader;