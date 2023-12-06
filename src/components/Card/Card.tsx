export function Card() {
    return (
        <a href="#" className="flex flex-col items-center pb-8 sm:flex-row sm:text-left">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg" alt="" className="w-full h-2/4 sm:h-40 sm:w-40 sm:max-w-[128px]" />
            <div className="px-8">
                <p className="mb-6 text-sm font-bold sm:text-base lg:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</p>
                <p className="text-sm ">November 12, 2022</p>
            </div>
        </a>
    )
}