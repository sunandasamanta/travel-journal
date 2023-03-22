import Card from "../components/Card"
import Data from "../Data"

export default function Hero() {
    return (
        <div className="p-4 lg:flex lg:flex-wrap">
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
