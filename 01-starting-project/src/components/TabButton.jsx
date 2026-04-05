export default function TabButton({children,onClick,isSelected}){
    return(
        <li>
            <button type="button" className={isSelected ? "active" : undefined} onClick={onClick}>{children}</button>
        </li>
    );
}