import HomeBtn from "./homeBtn";

type ErrorCompProp = {
    title: string, 
    subtitle: string
}

const ErrorComp = ({ title, subtitle }: ErrorCompProp) => {
    return(
        <section id="not-found">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <HomeBtn />
        </section>
    )
}

export default ErrorComp
