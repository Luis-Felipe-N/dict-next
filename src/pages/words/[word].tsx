import { useRouter } from "next/router"

export default function Word() {

    const router = useRouter()
    const { word } = router.query

    return (
        <h1>Pesquisando por: {word}</h1>
    )
}