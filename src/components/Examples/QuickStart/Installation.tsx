import CodeBlock from "../../CodeBlock"

const Installation = () => {
    return (
        <section id="installation" className="pt-8 px-4 w-full">
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Installation</h3>
                <div className="mx-auto">
                    <CodeBlock code="npm install react-confirm-manager" language="bash" height="h-max" />
                </div>
            </div>
        </section>
    )
}

export default Installation