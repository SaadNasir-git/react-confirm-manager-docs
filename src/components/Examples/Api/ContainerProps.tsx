const ContainerProps = () => {
    return (
        <section id='confirm-container-props'>
            <h2>
                Confirm Container Props
            </h2>
            <div className="py-10 w-full overflow-auto">
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
                            Default
                        </th>
                        <th>
                            Description
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                id
                            </td>
                            <td>
                                string
                            </td>
                            <td>
                                random
                            </td>
                            <td>
                                To show a specific container with a specific confirm() app
                            </td>
                        </tr>
                        <tr>
                            <td>
                                animation
                            </td>
                            <td>
                                AnimationType
                            </td>
                            <td>
                                slide
                            </td>
                            <td>
                                Animation type (16 options)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                animationDuration
                            </td>
                            <td>
                                number
                            </td>
                            <td>
                                300
                            </td>
                            <td>
                                Base animation duration (ms)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                animationDurationIn
                            </td>
                            <td>
                                number
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                Enter animation duration
                            </td>
                        </tr>
                        <tr>
                            <td>
                                animationDurationOut
                            </td>
                            <td>
                                number
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                Exit animation duration
                            </td>
                        </tr>
                        <tr>
                            <td>
                                defaultColorSchema
                            </td>
                            <td>
                                ColorSchema
                            </td>
                            <td>
                                dark
                            </td>
                            <td>
                                Default color scheme
                            </td>
                        </tr>
                        <tr>
                            <td>
                                closeOnEscape
                            </td>
                            <td>
                                boolean
                            </td>
                            <td>
                                true
                            </td>
                            <td>
                                Close with ESC key
                            </td>
                        </tr>
                        <tr>
                            <td>
                                closeOnClickOutside
                            </td>
                            <td>
                                boolean
                            </td>
                            <td>
                                true
                            </td>
                            <td>
                                Close on backdrop click
                            </td>
                        </tr>
                        <tr>
                            <td>
                                classes
                            </td>
                            <td>
                                ConfirmClasses
                            </td>
                            <td>
                                {`{}`}
                            </td>
                            <td>
                                Custom CSS classes
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ContainerProps