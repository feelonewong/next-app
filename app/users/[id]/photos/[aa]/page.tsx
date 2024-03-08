import React  from "react"

interface Props {
    params:{
        aa: number
    }
}

const Photos = ({ params: { aa } }: Props) => {
    return (
        <div>
            photos / {aa}
        </div>
    )
}

export default Photos