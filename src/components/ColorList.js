import React, { useState } from "react";
//import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../helpers/axiosWithAuth";
import EditMenu from "./EditMenu";
import AddMenu from "./AddMenu";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const [adding, setAdding] = useState(false);
  const [colorToAdd, setColorToAdd] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  //const { push } = useHistory();

  const saveEdit = e => {
    e.preventDefault();

    axiosWithAuth()
       .put(`/colors/${colorToEdit}`, colorToEdit)
       .then((response) => {
         //console.log(response)
         updateColors([...colors, response.data])
         //console.log(response)
         //push('/bubbles');
       })
       .catch((error) => {
         console.log(error)
       })
  };

  const deleteColor = color => {
    axiosWithAuth()
        .delete(`/colors/${color.id}`)
        .then((response) => {
          //console.log(response)
          updateColors(colors.filter(color => color.id !== Number(response.data)));
          //push('/bubbles')
        })
        .catch((error) => {
          console.error(error);
        })
  };

  const addColor = (event) => {
    axiosWithAuth()
        .post('/colors', colorToAdd)
        .then((response) => {
          updateColors(response.data)
        })
        .catch((error) => {
          console.error(error);
        })
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <button>Add a New Color</button>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.