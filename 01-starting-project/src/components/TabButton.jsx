export default function TabButton({children,onClick}){
    function handleClick(){
        console.log("Button is clicked");
    }
    return(
        <li>
            <button type="button" onClick={onClick}>{children}</button>
        </li>
    );
}