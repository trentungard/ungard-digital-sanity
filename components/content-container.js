export const ContentContainer = ({className, children}) => {
    return(
        <div className={`container mx-auto px-5 w-11/12 md:w-9/12 max-w-screen-xl ${className}`}>
            {children}
        </div>
    )
}