//handleClick the fn as a value in btn onclick

export default function TabButton({ children, onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    ); 
};