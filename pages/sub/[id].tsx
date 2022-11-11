import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const ID = () => {
    const router = useRouter();

    return (
        <Layout headerText={router.query.id?.toString() ?? ""}>
            <h1 style={{ color: "#ffffff" }}>{router.query.id}</h1>
        </Layout>
    )
}

export default ID;