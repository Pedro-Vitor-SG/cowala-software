import styled from "styled-components";

const Container = styled.div`
  background: #fafafa;
  height: 100vh;
  width: 100vw;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    width: 100vw;
    background: #0a1633;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;

    img {
      margin-right: 1rem;
    }
    img.logo_name {
      width: 200px;
    }
  }

  form {
    background-color: #ededed;
    padding: 2rem 0px;
    margin-top: 4rem;
    width: 83vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;

    fieldset {
      border: none;
      width: 50%;
      margin-bottom: 1rem;

      label {
        display: block;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
      }
      input {
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        font-size: 1.1rem;
      }
    }

    fieldset.name {
      input {
        width: 100%;
      }
    }

    fieldset.occupation_cell {
      display: flex;
      justify-content: space-between;
    }

    fieldset.ip {
      div {
        display: flex;
        justify-content: space-between;
      }
      input[type="text"] {
        width: 65%;
      }
      input[type="button"] {
        width: 30%;
        font-size: 1.1rem;
        background: #00d9d0;
        color: #0a1633;
        transition: 0.2s;
      }
      input[type="button"]:hover {
        cursor: pointer;
        background: #00c8cf;
      }
    }
    fieldset.buttons {
      margin-top: 2rem;
      display: flex;
      justify-content: center;

      button {
        border: none;
        background: #0a1633;
        color: #ffffff;
        margin: 0px 1rem;
        padding: 0.5rem 2rem;
        font-size: 1.1rem;
        transition: 0.2s;
      }
      button:hover {
        cursor: pointer;
        background: #1b2744;
      }
    }
  }

  @media (max-width: 599px) {
    header {
      img {
        width: 40px;
      }
      img.logo_name {
        width: 130px;
      }
    }
    form {
      margin: 2rem 0px;
      padding: 1rem 0px;
      fieldset {
        width: 90%;
        label {
          font-size: 0.8rem;
        }
        input {
          font-size: 0.8rem;
          width: 100%;
        }
      }
      fieldset.occupation_cell {
        flex-direction: column;

        div.occupation {
          margin-bottom: 1rem;
        }
      }
      fieldset.ip {
        div {
          flex-direction: column;
        }
        input[type="text"] {
          width: 100%;
          margin-bottom: 0.5rem;
        }
        input[type="button"] {
          width: 50%;
          font-size: 0.8rem;
        }
      }
      fieldset.buttons {
        button {
          margin: 0px 0.5rem;
          padding: 0.5rem 1.8rem;
          font-size: 0.9rem;
        }
      }
    }
  }
  @media screen and (min-width: 600px) and (max-width: 699px) {
    header {
      img {
        width: 60px;
      }
      img.logo_name {
        width: 150px;
      }
    }

    form {
      margin-top: 2rem;

      fieldset {
        width: 80%;
        label {
          font-size: 0.8rem;
        }
        input {
          font-size: 0.8rem;
          width: 100%;
        }
      }

      fieldset.ip {
        input[type="text"] {
          width: 65%;
        }
        input[type="button"] {
          width: 25%;
          font-size: 0.8rem;
        }
      }

      fieldset.buttons {
        button {
          margin: 0px 0.5rem;
          padding: 0.5rem 1.8rem;
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (min-width: 700px) and (max-width: 800px) {
    header {
      img {
        width: 60px;
      }
      img.logo_name {
        width: 150px;
      }
    }

    form {
      margin-top: 2rem;
      fieldset {
        width: 70%;
        label {
          font-size: 0.8rem;
        }
        input {
          font-size: 0.8rem;
          width: 100%;
        }
      }

      fieldset.ip {
        input[type="text"] {
          width: 65%;
        }
        input[type="button"] {
          width: 25%;
          font-size: 0.8rem;
        }
      }

      fieldset.buttons {
        button {
          margin: 0px 0.5rem;
          padding: 0.5rem 1.8rem;
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (min-width: 800px) and (max-width: 1024px) {
    header {
      img {
        width: 60px;
      }
      img.logo_name {
        width: 150px;
      }
    }

    form {
      margin-top: 2rem;
      fieldset {
        width: 60%;
        label {
          font-size: 0.8rem;
        }
        input {
          font-size: 0.8rem;
          width: 100%;
        }
      }

      fieldset.ip {
        input[type="text"] {
          width: 65%;
        }
        input[type="button"] {
          width: 25%;
          font-size: 0.8rem;
        }
      }

      fieldset.buttons {
        button {
          margin: 0px 0.5rem;
          padding: 0.5rem 1.8rem;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default Container;
