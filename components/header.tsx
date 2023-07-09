export default function Header({
    className
}: {
    className?: string
}): JSX.Element {
    return <div className={className}>
        <h1 className="text-3xl -mb-3">Tim Barbiers</h1>
        <h3 className="text-lg ml-1 text-slate-700 dark:text-gray-300">Software development</h3>
    </div>
}