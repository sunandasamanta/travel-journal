import Card from "../components/Card"
import Data from "../Data"

export default function Hero() {
    return (
        <div>
            {
                Data.map((data) => (
                    <Card
                        key={data.id}
                        data={data.info}
                    />
                ))
            }
        </div>
    )
}
