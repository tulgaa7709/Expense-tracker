"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);

  function loadList() {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA", data)
        setCategories(data)
      });
  }

  useEffect(() => {
    loadList();
  }, []);

  function handleDelete(id) {
    console.log("ID: ", id)
    fetch(`http://localhost:4000/categories/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 404) {
        alert("Category not found");
      }
      loadList();
    });
  }

  function createNew() {
    const name = prompt("Name..");
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  }

  return (
    <main>
      <div>
      <button onClick={createNew} className="btn btn-accent">ADD New</button>
      {categories.map((category) => (
        <div key={category.name}>
          {category.name}<button className="btn btn-accentk">Edit</button>
          <button onClick={() => handleDelete(category.id)} className="btn btn-accent">Delete</button>
        </div>
      ))}
      </div>

      {/* <div>
        Wrong data
        <button onClick={() => handleDelete("wrongID")} className="text-white bg-black">Delete</button>
      </div> */}
    </main>
  )
}