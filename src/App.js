import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import ItemList from "./ItemList";
import Forms from "./Forms";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Footer from "./Footer";

function App() {
  const [items, setItem] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

  function handleAddItems(item) {
    setItem((items) => [...items, item]);
    console.log(items);
  }

  function handleRemoveItem(id) {
    setItem(items.filter((item) => item.id !== id));
  }

  function handleToggleChecked(id) {
    setItem(
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  return (
    <div>
      <Header />
      <Forms onAddItem={handleAddItems} />
      <ItemList
        items={sortedItems}
        onRemove={handleRemoveItem}
        onToggleChecked={handleToggleChecked}
      />
      <div className="center">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="name">Sort by Name</option>
          <option value="checked">Sort by Check status order</option>
        </select>
      </div>
      <Footer items={items} />
    </div>
  );
}

export default App;
