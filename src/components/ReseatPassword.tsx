import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reseatPassword } from "../services/User";
import { toast } from "react-toastify";

export default function ReseatPassword() {
  const [user, setUser] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await reseatPassword(user.email);
    if (res.user) {
      toast.success("Tu contraseña se cambio", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`${res.error}`, {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    navigate("/login");
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card text-center ">
            <div className="card-header">
              <h4>Resetear contraseña</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3 d-flex align-items-center">
                  <i className="fa-solid fa-user me-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    className="form-control"
                    onChange={handleInputChange}
                    autoFocus={true}
                  />
                </div>
                <div className="form-group mb-3">
                  <button className="btn btn-success btn-block">
                    Aceptar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
