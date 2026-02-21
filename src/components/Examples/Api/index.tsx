import ApiOptions from "./ApiOptions"
import SimpleApi from "./SimpleApi"
import ContainerProps from "./ContainerProps"

const Api = () => {
    return (
        <section id="api-methods" className="bg">
            <h2 className="text-center">
                Api Methods
            </h2>
            <SimpleApi />
            <ApiOptions />
            <ContainerProps/>
        </section>
    )
}

export default Api