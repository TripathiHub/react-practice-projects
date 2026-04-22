export default function Tabs({children,button, ButtonContainer = "menu"}){
    return(
        // here we have pass html element as prop value we can also pass custom component by calling name
        // prop name which is containing identifier value should start with uppercase or a extra variable should be 
        // used like const ButtunContainer = buttonContainer then use ButtonContainer for setting props at its place
        //in components ,here we have set default value for prop
        <>
        <ButtonContainer>{button}</ButtonContainer>
        {children}
        </>
    )
}