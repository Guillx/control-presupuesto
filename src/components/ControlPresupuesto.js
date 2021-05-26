import { revisarPresupuesto } from "../helpers";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <div className="alert alert-primary">
        Presupuesto Total: {presupuesto} €
      </div>

      <div className={revisarPresupuesto(presupuesto, restante)}>
        Presupuesto Restante: {restante} €
      </div>
    </>
  );
};

export default ControlPresupuesto;
