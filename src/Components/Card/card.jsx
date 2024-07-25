import React, { useState, useEffect } from "react";
import "./card.css";
import "../../App.css";

function card() {
  const [users, setUsers] = useState([]);
  async function getDataFromApi(url) {
    try {
      const respons = await fetch(url);
      let data = [];
      if (respons.status == 200) {
        data = await respons.json();
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataFromApi("https://jsonplaceholder.typicode.com/photos")
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        {users.length > 0 &&
          users.map(function (user, index) {
            return (
              <div className="wrap">
                <img className="img" src={user.url} alt="" />
                <h2>ID:{user.id}</h2>

                <h3 className="albom">{user.albumId}</h3>

                <h3 className="title">{user.title}</h3>
                <a href="">
                  <h4>{user.thumbnailUrl}</h4>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default card;
