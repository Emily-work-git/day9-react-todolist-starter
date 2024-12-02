import { Button, Input, Modal } from "antd";
import { EditFilled } from "@ant-design/icons";
import React from "react";
import { updateTodo } from "../api/todo";
import { Actions } from "../context/todoReducer";
import { TodoContext } from "../App";


export default function UpdateTodoModal(props) {
  const maxInputLength = 100;
  const { dispatch } = React.useContext(TodoContext);
  const [ newItemText, setNewItemText ] = React.useState("");

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const requestBody = {
      id: props.item.id,
      text: newItemText,
      done: props.item.done
    };
    updateTodo(props.item.id, requestBody).then(
      (response) => {
        console.log(response)
      dispatch({ type: Actions.UPDATE, payload: {id: props.item.id, todo: response} });
      setIsModalOpen(false);
      setNewItemText("");
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    if (event.target.value.length > maxInputLength) {
      alert("The input has exceed the maximum length allowed");
      return;
    }
    setNewItemText(event.target.value);
  };


  return (
    <>
      <Button onClick={showModal} variant="outlined" size="small">
        <EditFilled />
      </Button>
      <Modal
        title="Update todo item to..."
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <h2>New todo item: </h2>
        <Input
          type="text"
          maxLength={maxInputLength}
          value={newItemText}
          onChange={handleInputChange}
          size="small"
        />
      </Modal>
    </>
  );
}
