import { userInfo } from "os";
import { useContext } from "react";
import AuthContext from "../../contexts/auth/authContext";

const Private = () => {
    const auth = useContext(AuthContext)

    return(
        <div>
            <h1>
            Pagina privada
            </h1>

            Olá {auth.user?.name}, tudo bem?

        </div>
    );
};

export default Private;


