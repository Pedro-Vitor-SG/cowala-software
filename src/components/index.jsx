import React, { useState } from "react";
import logo from "../assets/Logo.png";
import logoName from "../assets/Cowala Software.png";
import Container from "./styles";

const Home = () => {
  const [user, setUser] = useState({
    name: "",
    occupation: "",
    phone: "",
    ip: "",
  });

  const handleName = (e) => {
    const newUser = {
      ...user,
      name: e.target.value,
    };
    setUser(newUser);
  };

  const handleOccupation = (e) => {
    const newUser = {
      ...user,
      occupation: e.target.value,
    };
    setUser(newUser);
  };
  const handlePhone = (e) => {
    const newUser = {
      ...user,
      phone: e.target.value,
    };
    setUser(newUser);
  };

  const getUserIp = () => {
    fetch("https://ip-fast.com/api/ip/").then(async (response) => {
      const newUser = {
        ...user,
        ip: await response.text(),
      };
      setUser(newUser);
    });
  };

  const saveUserData = (e) => {
    e.preventDefault();

    if (typeof Storage !== "undefined") {
      if (localStorage.cont) {
        localStorage.cont = Number(localStorage.cont) + 1;
      } else {
        localStorage.cont = 1;
      }
      localStorage.setItem("user" + localStorage.cont, JSON.stringify(user));
    }
  };

  const deleteUserData = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Container>
      <header>
        <img src={logo} alt="Cowala Logo" />
        <img src={logoName} alt="Cowala Software" className="logo_name" />
      </header>

      <form>
        <fieldset className="name">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            className="input_name"
            onChange={handleName}
          />
        </fieldset>

        <fieldset className="occupation_cell">
          <div className="occupation">
            <label htmlFor="occupation">Profissão</label>
            <input
              type="text"
              name="occupation"
              id="occupation"
              className="input_occupation"
              onChange={handleOccupation}
            />
          </div>

          <div>
            <label htmlFor="cell_number">Celular</label>

            <input
              type="tel"
              name="cell_number"
              id="cell_number"
              className="input_cell_number"
              placeholder="(11) 98651-6000"
              onChange={handlePhone}
            />
          </div>
        </fieldset>

        <fieldset className="ip">
          <label htmlFor="ip">Meu IP</label>
          <div>
            <input
              type="text"
              name="ip"
              id="ip"
              className="input_ip"
              placeholder="171.881.210.231"
              value={user.ip}
              onChange={setUser}
              readOnly={true}
            />

            <input type="button" value="Encontrar IP" onClick={getUserIp} />
          </div>
        </fieldset>

        <fieldset className="buttons">
          <button onClick={saveUserData}>Salvar</button>
          <button onClick={deleteUserData}>Limpar</button>
        </fieldset>
      </form>
    </Container>
  );
};
export default Home;
