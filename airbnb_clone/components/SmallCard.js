import Image from "next/image";

function SmallCard({img, location, distance}) {
    return (
        <div>
            {/* left */}
            <div>
                <Image src={img} layout="fill"/>
            </div>

            {/* right */}
            <div>
            
            </div>

        </div>
    )
}

export default SmallCard;
