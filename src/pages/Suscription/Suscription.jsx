import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BsCheckLg } from "react-icons/bs";
import Dashboard from "../../components/Dashboard/Dashboard";

const Suscription = () => {
  const suscripciones__colection = [
    {
      uid_admin: "brian",
      uid_user: "ivan",
      name: "Ivan Gamboa Barroso",
      enero: true,
      febrero: true,
      marzo: true,
      abril: true,
      mayo: true,
      junio: false,
      julio: false,
      agosto: false,
      septiembre: false,
      octubre: false,
      noviembre: true,
      diciembre: false,
    },
    {
      uid_admin: "brian",
      uid_user: "rolo",
      name: "Rolando Dariel Felizano",
      enero: false,
      febrero: false,
      marzo: false,
      abril: false,
      mayo: false,
      junio: false,
      julio: false,
      agosto: true,
      septiembre: false,
      octubre: false,
      noviembre: false,
      diciembre: false,
    },
    {
      uid_admin: "brian",
      uid_user: "vera",
      name: "Leandro Vera",
      enero: false,
      febrero: false,
      marzo: false,
      abril: false,
      mayo: false,
      junio: false,
      julio: false,
      agosto: false,
      septiembre: false,
      octubre: false,
      noviembre: false,
      diciembre: false,
    },
  ];

  return (
    <>
      <Dashboard>
        <h1>SUSCRIPCIONES</h1>
        <br />
        <table>
          <thead>
            <tr>
              <th colSpan="100%">SUSCRIPCIONES</th>
            </tr>
            <tr>
              <th>Nombre</th>
              <th>Enero</th>
              <th>Febrero</th>
              <th>Marzo</th>
              <th>Abril</th>
              <th>Mayo</th>
              <th>Junio</th>
              <th>Julio</th>
              <th>Agosto</th>
              <th>Septiembre</th>
              <th>Octubre</th>
              <th>Noviembre</th>
              <th>Diciembre</th>
            </tr>
          </thead>
          <tbody>
            {suscripciones__colection.map((item, i) => {
              return (
                <>
                  <tr>
                    <td width="500px">
                      <h1>{item.name}</h1>
                    </td>
                    <td>
                      {item.enero ? (
                        <>
                          <label class="container">
                            <input type="checkbox" checked={item.enero} />
                            <span class="checkmark"></span>
                          </label>
                        </>
                      ) : (
                        <h1>-</h1>
                      )}
                    </td>
                    <td>{item.febrero ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.marzo ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.abril ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.mayo ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.junio ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.julio ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.agosto ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.septiembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.octubre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.noviembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.diciembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th colSpan="100%">SUSCRIPCIONES</th>
            </tr>
            <tr>
              <th>Nombre</th>
              <th>Enero</th>
              <th>Febrero</th>
              <th>Marzo</th>
              <th>Abril</th>
              <th>Mayo</th>
              <th>Junio</th>
              <th>Julio</th>
              <th>Agosto</th>
              <th>Septiembre</th>
              <th>Octubre</th>
              <th>Noviembre</th>
              <th>Diciembre</th>
            </tr>
          </thead>
          <tbody>
            {suscripciones__colection.map((item, i) => {
              return (
                <>
                  <tr>
                    <td width="500px">
                      <h1>{item.name}</h1>
                    </td>
                    <td>
                      {item.enero ? (
                        <>
                          <label class="container">
                            <input type="checkbox" checked={item.enero} />
                            <span class="checkmark"></span>
                          </label>
                        </>
                      ) : (
                        <h1>-</h1>
                      )}
                    </td>
                    <td>{item.febrero ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.marzo ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.abril ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.mayo ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.junio ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.julio ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.agosto ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.septiembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.octubre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.noviembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.diciembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th colSpan="100%">SUSCRIPCIONES</th>
            </tr>
            <tr>
              <th>Nombre</th>
              <th>Enero</th>
              <th>Febrero</th>
              <th>Marzo</th>
              <th>Abril</th>
              <th>Mayo</th>
              <th>Junio</th>
              <th>Julio</th>
              <th>Agosto</th>
              <th>Septiembre</th>
              <th>Octubre</th>
              <th>Noviembre</th>
              <th>Diciembre</th>
            </tr>
          </thead>
          <tbody>
            {suscripciones__colection.map((item, i) => {
              return (
                <>
                  <tr>
                    <td width="500px">
                      <h1>{item.name}</h1>
                    </td>
                    <td>
                      {item.enero ? (
                        <>
                          <label class="container">
                            <input type="checkbox" checked={item.enero} />
                            <span class="checkmark"></span>
                          </label>
                        </>
                      ) : (
                        <h1>-</h1>
                      )}
                    </td>
                    <td>{item.febrero ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.marzo ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.abril ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.mayo ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.junio ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.julio ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.agosto ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.septiembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.octubre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.noviembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.diciembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th colSpan="100%">SUSCRIPCIONES</th>
            </tr>
            <tr>
              <th>Nombre</th>
              <th>Enero</th>
              <th>Febrero</th>
              <th>Marzo</th>
              <th>Abril</th>
              <th>Mayo</th>
              <th>Junio</th>
              <th>Julio</th>
              <th>Agosto</th>
              <th>Septiembre</th>
              <th>Octubre</th>
              <th>Noviembre</th>
              <th>Diciembre</th>
            </tr>
          </thead>
          <tbody>
            {suscripciones__colection.map((item, i) => {
              return (
                <>
                  <tr>
                    <td width="500px">
                      <h1>{item.name}</h1>
                    </td>
                    <td>
                      {item.enero ? (
                        <>
                          <label class="container">
                            <input type="checkbox" checked={item.enero} />
                            <span class="checkmark"></span>
                          </label>
                        </>
                      ) : (
                        <h1>-</h1>
                      )}
                    </td>
                    <td>{item.febrero ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.marzo ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.abril ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.mayo ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.junio ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.julio ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.agosto ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.septiembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.octubre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.noviembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                    <td>{item.diciembre ? <BsCheckLg /> : <h1>-</h1>}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </Dashboard>
    </>
    // <Dashboard__Section>
    //   <Sidebar />
    //   <Panel__Section>

    //   </Panel__Section>
    // </Dashboard__Section>
  );
};

export default Suscription;
