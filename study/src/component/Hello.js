import World from "./World";
import styles from './Hello.module.css';

export default function Hello(){
    return( 
        <div>
            <p>Hello</p>
            <World />
            <div className={styles.box}>Hello</div>
        </div>
    )
}