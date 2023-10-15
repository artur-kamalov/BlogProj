import Link from "next/link"

export default function AboutLoyal ({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h1 className='m-8 grid place-items-center font-bold'>About us</h1>
            <ul className='m-4 grid place-items-center'>
                <li>
                    <Link href = '/about/contacts'>Contacts</Link>
                </li>
                <li>
                    <Link href = '/about/team'>Team</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}