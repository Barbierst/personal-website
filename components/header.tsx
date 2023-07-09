export default function Header({
    className
}: {
    className?: string
}): JSX.Element {
    return <div className={className}>
        <h1 className="text-3xl -mb-3">Tim Barbiers</h1>
        <h3 className="text-lg ml-1">Software development</h3>
    </div>
}