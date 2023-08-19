
export default function Header({
  className
}: {
    className?: string
}): JSX.Element {
  return <div className={className}>
    <h1 className="text-4xl xl:text-5xl -ml-2 -mb-2 font-bold">Tim Barbiers</h1>
    <h3 className="text-xl xl:text-3xl text-stone-700 dark:text-gray-300">Software development</h3>
  </div>
}