import dayjs from 'dayjs'

export const Footer = () => {
    return (
        <>
            <div className="flex flex-row bg-bm-blue text-white py-5">
                <p>
                    {dayjs().year().toString()}
                </p>
            </div>
        </>
    )
}
