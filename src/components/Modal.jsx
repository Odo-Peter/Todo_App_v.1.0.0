import React from 'react';

const Modal = ({
  closeModal,
  handleEditedTodo,
  editedTodo,
  handleUpdatedTodo,
}) => {
  return (
    <div className="modal">
      <div className="modal-main">
        <div>
          <button
            className="absolute text-sm font-thin bg-[red] py-0.5 px-2 text-[white] top-0 right-0 text-center rounded-tr-lg hover:bg-[#f12e2e]"
            onClick={closeModal}
          >
            x
          </button>
        </div>
        <form onSubmit={handleUpdatedTodo}>
          <input
            type="text"
            placeholder="Edit Todo..."
            className="absolute top-10 left-8 text-xs text-txt-color rounded-lg outline-none px-3 py-4 w-5/6 bg-bg-color focus:text-txt-color focus:placeholder:opacity-50 autofocus"
            onChange={handleEditedTodo}
            value={editedTodo}
          />
          <button
            className="absolute text-xs bg-[#0c8339] py-1 px-4 text-[white] bottom-5 right-32 text-center rounded-md hover:bg-[#0cbb0c]"
            type="submit"
          >
            Update
          </button>
        </form>
        <button
          className="absolute text-xs bg-[tomato] py-1 px-4 text-[white] bottom-5 right-10 text-center rounded-md hover:bg-[#e74326]"
          type="button"
          onClick={closeModal}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
