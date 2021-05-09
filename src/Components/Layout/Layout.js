import classes from './layout.module.css';
import Aux from "../../HOC/Hoc";
const Layout = (props) => {
  return (
    <Aux>
      <div>toolbar, sidedrawer, backdrop </div>
      <main className = {classes.content}>
        {props.children}
        </main>
    </Aux>
  );
};

export default Layout;
