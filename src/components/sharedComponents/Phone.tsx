import { css, StyleSheet } from "aphrodite";
import chatLogin from '../../assets/chat/chat.png';

export function Phone() {
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.border)}>
                <div className={css(styles.hiddenBar)}>
                    <span className={css(styles.greyRoundCard)}></span>
                </div>
                {/* <img className={css(styles.img)} src={chatLogin} alt="" /> */}
            </div>
        </div>
    );
}


const styles = StyleSheet.create({
    container: {
        width: "300px",
        height: "600px",
        backgroundColor: "white",
        marginTop: "200px",
        borderRadius: "50px",
        boxShadow: "0px 10px 10px black",
        padding: "15px 12px",
        marginLeft: "100px",
        border: "1px solid #ffaf23",

    },
    border: {
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "50px",
        border: "1px solid #ffaf23",
        display:"flex",
        justifyContent: "center"
    },
    img: {
        borderRadius: "50px",
        height: "100%"
    },
    hiddenBar: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        width: "100px",
        height: "20px",
        backgroundColor: "white",
        borderRadius: "0px 0px 50px 50px",
        borderLeft: "1px solid #ffaf23",
        borderBottom: "1px solid #ffaf23",
        borderRight: "1px solid #ffaf23",
    },
    greyRoundCard: {
        display: "block",
        backgroundColor: "grey",
        marginTop: "2px",
        borderRadius: "10px",
        width: "30px",
        height: "5px"
    }
})