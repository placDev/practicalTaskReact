import { useEffect, useState } from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/pageNotFound.module.css";

const PageNotFound = () => {

    const [randomValue, setRandomValue] = useState<number>(0);
    const [memUrls] = useState<Array<string>>(
        [
            "https://flatlogic.com/blog/wp-content/uploads/2021/06/18-768x767.jpeg",
            "https://flatlogic.com/blog/wp-content/uploads/2021/06/292dfc52465f28b3c40ecf201c97b091.jpeg",
            "https://flatlogic.com/blog/wp-content/uploads/2021/06/12-1.png",
            "https://flatlogic.com/blog/wp-content/uploads/2021/06/5.png"
        ]
    );

    useEffect(() => {
        setRandomValue(getRandomNumber(memUrls.length));
    }, []);

    const getRandomNumber = (max: number): number => Math.floor(Math.random() * max);

    const getMemUrl = (randomIndex: number): string => {
        return memUrls[randomIndex];
    }

    const MemVisualizer = ({ url }: { url: string }) => {
        return (
            <>
                <div>
                    <img height={400} src={ url } />
                </div>
            </>
        );
    }

    return (
        <>
            <h1 className="font-weight-300">Страница не найдена</h1>
            <h2 className="font-weight-200">Ревьюер, рандомный мем для тебя :)</h2>
            <MemVisualizer url={getMemUrl(randomValue)}/>
        </>
    );
}

export default CSSModules(PageNotFound, styles);