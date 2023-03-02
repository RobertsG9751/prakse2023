import style from './UserPanel.module.css'
import Button from '../../UI/Button'

const UserPanel = (props) =>{
    const user = JSON.parse(localStorage.getItem("user_data"))
    console.log(user)

    return(
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src={user.photos[2].value}></img>
                <div className={style.container}>
                    <p>Username: {user.displayName}</p>
                    <p>ID: {user.id}</p>
                    <p>Crypto: 0</p>
                </div>
                <Button text="Redeem Rewards!"></Button>
                <Button text="Earn crypto!"></Button>
            </div>
        </div>
    )
}
export default UserPanel