import React from 'react';

const AddMenu = ({colorToAdd, saveAdd, setColorToAdd, setAdding, initialColor}) => {
    return(<form onSubmit={saveAdd}>
        <legend>Add color</legend>
        <label htmlFor="colorName">color name:</label>
        <input
          type="text"
          name="colorName"
          id="colorName"
          onChange={(e) =>
            setColorToAdd({ ...colorToAdd, color: e.target.value })
          }
          value={colorToAdd.color}
        />
      
        <label htmlFor="hex">hex code:</label>
        <input
          type="text"
          name="hex"
          id="hex"
          onChange={(e) =>
            setColorToAdd({
              ...colorToAdd,
              code: { hex: e.target.value },
            })
          }
          value={colorToAdd.code.hex}
        />
      
        <div className="button-row">
          <button type="submit">add</button>
          <button onClick={() => setAdding(false)} setColorToAdd={initialColor}>cancel</button>
        </div>
    </form>);
}

export default AddMenu;