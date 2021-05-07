import classes from './layout.css';
import Aux from "../../HOC/Hoc";
const Layout = (props) => {
  console.log(classes);
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
