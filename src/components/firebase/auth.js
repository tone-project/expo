import { getAuth } from "firebase/auth";
import app from "./config";

const auth = () => {
    return getAuth(app);
}

export default auth;