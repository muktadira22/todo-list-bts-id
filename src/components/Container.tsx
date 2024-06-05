import React from "react"
import classNames from "classnames"

function Container({ children, className } : {children: React.ReactNode, className?: string}) {
    return (
        <div className={classNames("w-full max-lg:px-5 md:mx-auto md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]", className)}>
            {children}
        </div>
    )
}

export default Container