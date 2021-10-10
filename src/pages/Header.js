const Header = (props) => {
    return (
        <div>
            <h2>Header</h2>
            <button style={{ fontSize: '20px' }} onClick={props.onLogin}>{props.isLogin ? 'logout' : 'login'}</button>
        </div>
    )
}

export default Header;
