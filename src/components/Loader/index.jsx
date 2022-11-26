import { ThreeDots } from "react-loader-spinner"
export function Loader(){
    return(
        <>
    <div className="loader">
                    <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#f76190" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName="loader"
                    visible={true}
                     />
                    </div>
    </>
    )
}