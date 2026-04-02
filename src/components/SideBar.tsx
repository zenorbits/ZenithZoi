import React from 'react'

const SideBar = () => {
    const featureList = [{
        listName: 'Dashboard',
        listLogo: ''
    }, {
        listName: 'Tasks',
        listLogo: ''
    }, {
        listName: 'Goals',
        listLogo: ''
    }, {
        listName: 'Time',
        listLogo: ''
    }, {
        listName: 'Calendar',
        listLogo: ''
    }]
    return (
        <div className='h-full w-[15%] bg-[#242328] text-white font-mono p-8 flex flex-col items-center gap-16 '>
            <div className="logo text-2xl font-bold">
                ZenithZoi
            </div>
            <div className="list flex flex-col ">
                {featureList.map((p, id) => (
                    <div key={id}>
                        {p.listName}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SideBar