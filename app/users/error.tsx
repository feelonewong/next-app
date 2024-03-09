"use client"
import React from "react";

interface Props {
    error: Error
}
const ErrorPage = ({error}: Props) => {
    return (
       <div>Error Page</div>
    )
}

export default ErrorPage