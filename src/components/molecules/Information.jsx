import Title from "../atoms/Title";
import Parrafo from "../atoms/Parrafo";
import Image from "../atoms/Image";

function Information({title,msn,img, container}) {
    return (
        <div className={container}>
            <Image img={img}></Image>
            <div className="Information">
                <Title title={title}/>
                <Parrafo msn={msn}/>
            </div>
        </div>
    );
}

export default Information;