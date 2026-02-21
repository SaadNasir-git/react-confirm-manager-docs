import { confirm, ConfirmContainer } from 'react-confirm-lite'
import CodeBlock from '../../../CodeBlock'
import Button from '../../../ui/Button'

const CustomDialogCode = `import { confirm, ConfirmContainer } from "react-confirm-manager"

const CustomDialog = () => {
    const handleClick = async () => {
        const isConfirmed = await confirm('Are you sure?')
        if (isConfirmed === null) console.log('User clicked outside or pressed escape')
        else if (isConfirmed) console.log('Ok')
        else console.log('Cancel')
    }

    return (
        <div>
            <button onClick={handleClick}>
                Try
            </button>
            <ConfirmContainer
                animation="flip"
                animationDuration={300}
                closeOnEscape={true}
                closeOnClickOutside={true}
                lockScroll={true}
            >
                {({
                    isVisible,
                    confirm,
                    handleCancel,
                    handleOk,
                    containerRef,
                    animationClass,
                    animationStyle
                }) => (
                    <div
                        className={\`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300\`}
                    >
                        {/* Backdrop */}
                        <div
                            className={\`absolute inset-0\`}
                            onClick={handleCancel}
                        />

                        {/* Alert Modal - Uses Tailwind's dark mode classes */}
                        <div
                            ref={containerRef}
                            className={\`relative z-10 w-full max-w-md transform rounded-2xl p-6 shadow-2xl transition-all duration-300 $\{animationClass} 
                    bg-white dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100
                    border dark:border-gray-800\`}
                            style={animationStyle}
                        >
                            {/* Title */}
                            <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                                {confirm.title}
                            </h2>

                            {/* Message */}
                            <p className="mb-6 text-gray-600 dark:text-gray-300">
                                {confirm.message}
                            </p>

                            {/* Buttons */}
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={handleCancel}
                                    disabled={!isVisible}
                                    className="rounded-lg px-4 py-2 font-medium transition-colors 
                            text-gray-700 dark:text-gray-300 
                            bg-gray-100 dark:bg-gray-800/50
                            hover:bg-gray-200 dark:hover:bg-gray-800
                            disabled:opacity-50"
                                >
                                    {confirm.cancelText || 'Cancel'}
                                </button>
                                <button
                                    onClick={handleOk}
                                    disabled={!isVisible}
                                    className="rounded-lg px-4 py-2 font-medium text-white transition-colors 
                            bg-blue-600 hover:bg-blue-700 
                            dark:bg-blue-600 dark:hover:bg-blue-700
                            disabled:opacity-50"
                                >
                                    {confirm.okText || 'OK'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </ConfirmContainer>
        </div>
    )
}

export default CustomDialog
`

const CustomDialogPreview = () => {
    const handleClick = async () => {
        const isConfirmed = await confirm('Are you sure?')
        if (isConfirmed === null) console.log('User clicked outside or pressed escape')
        else if (isConfirmed) console.log('Ok')
        else console.log('Cancel')
    }

    return (
        <div>
            <Button onClick={handleClick}>
                Try
            </Button>
            <ConfirmContainer
                animation="flip"
                animationDuration={300}
                closeOnEscape={true}
                closeOnClickOutside={true}
                lockScroll={true}
            >
                {({
                    isVisible,
                    confirm,
                    handleCancel,
                    handleOk,
                    containerRef,
                    animationClass,
                    animationStyle
                }) => (
                    <div
                        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300`}
                    >
                        {/* Backdrop */}
                        <div
                            className='absolute inset-0'
                            onClick={handleCancel}
                        />

                        {/* Alert Modal - Uses Tailwind's classes */}
                        <div
                            ref={containerRef}
                            className={`relative z-10 w-full max-w-md transform rounded-2xl p-6 shadow-2xl transition-all duration-300 ${animationClass} 
                    bg-white dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100
                    border dark:border-gray-800`}
                            style={animationStyle}
                        >
                            {/* Title */}
                            <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                                {confirm.title}
                            </h2>

                            {/* Message */}
                            <p className="mb-6 text-gray-600 dark:text-gray-300">
                                {confirm.message}
                            </p>

                            {/* Buttons */}
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={handleCancel}
                                    disabled={!isVisible}
                                    className="rounded-lg px-4 py-2 font-medium transition-colors 
                            text-gray-700 dark:text-gray-300 
                            bg-gray-100 dark:bg-gray-800/50
                            hover:bg-gray-200 dark:hover:bg-gray-800
                            disabled:opacity-50"
                                >
                                    {confirm.cancelText || 'Cancel'}
                                </button>
                                <button
                                    onClick={handleOk}
                                    disabled={!isVisible}
                                    className="rounded-lg px-4 py-2 font-medium text-white transition-colors 
                            bg-blue-600 hover:bg-blue-700 
                            dark:bg-blue-600 dark:hover:bg-blue-700
                            disabled:opacity-50"
                                >
                                    {confirm.okText || 'OK'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </ConfirmContainer>
        </div>
    )
}

const CostomDialog = () => {
    return (
        <section id='custom-dialog'>
            <h2>Custom Dialog</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 p-2">
                You can create your own custom dialog like this.
            </p>
            <CodeBlock code={CustomDialogCode} language='tsx' preview={CustomDialogPreview()} />
            <div className='pt-10 w-full overflow-auto'>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Prop
                            </th>
                            <th>
                                Type
                            </th>
                            <th>
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                isVisible
                            </td>
                            <td>
                                boolean
                            </td>
                            <td>
                                It's value is true when it starts showing and returns false when it starts hiding. It can be used when you made your own custom animation but, if you are using an built in animation then you will not need it.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                confirm
                            </td>
                            <td>
                                {`{
                                id?: string;
                                title?: string;
                                message: string;
                                colorSchema?: ColorSchema;
                                okText?: string;
                                cancelText?: string;
                            };`}
                            </td>
                            <td>
                                It contains the data which you passed through confirm api.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                containerRef
                            </td>
                            <td>
                                {`React.RefObject<HTMLDivElement | null>`}
                            </td>
                            <td>
                                If you want that container hide when you click outside the container then it hides with animation then, you will have to use it mean you will have to give this ref to the container.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                animationClass
                            </td>
                            <td>
                                string
                            </td>
                            <td>
                                It contains the classes for animation.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                animationStyle
                            </td>
                            <td>
                                React.CSSProperties
                            </td>
                            <td>
                                It contains the css properties for animation.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                handleCancel
                            </td>
                            <td>
                                {`() => void`}
                            </td>
                            <td>
                                You can give it to the cancle button and you will get false by the confirm api.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                handleOk
                            </td>
                            <td>
                                {`() => void`}
                            </td>
                            <td>
                                You can give to the ok button and you will get true by the confirm api.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default CostomDialog