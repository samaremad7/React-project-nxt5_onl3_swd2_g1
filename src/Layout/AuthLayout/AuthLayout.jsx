import { Outlet } from "react-router";
import TheFooter from '../../components/TheFooter/TheFooter';

function AuthLayout(){
return (
    <div className="Auth-Layout">
<main>
    <Outlet></Outlet>
</main>
<footer> <TheFooter></TheFooter></footer>
    </div>
)
}
export default AuthLayout ;