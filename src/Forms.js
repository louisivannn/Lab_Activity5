import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Forms({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    console.log(newItem);
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className="mx-auto text-center">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="form-select mb-3"
        >
          {Array.from({ length: 30 }, (_, n) => n + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Add an item..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-3"
        />
        <Button type="submit" variant="primary" className="btn-lg">
          I Got This
        </Button>
      </form>
    </div>
  );
}

export default Forms;
