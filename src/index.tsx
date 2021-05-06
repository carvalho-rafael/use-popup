import { useMemo, useState } from "react";
import './index.scss';

export type PopupProps = {
    title: string,
    message: string,
    color: string,
    seconds: number
}

export default function usePopup() {
    const [active, setActive] = useState(false)
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [color, setColor] = useState('')

    function showPopup({ title, message, color, seconds }: PopupProps) {
        setTitle(title);
        setMessage(message);
        setColor(color);

        setActive(true)

        setTimeout(() => {
            setActive(false)
        }, seconds * 1000);
    }

    const Popup = useMemo(() =>
        () => active ? (
            <aside className="popup-container" style={{background: color}}>
                <h3>{title}</h3>
                <p>{message}</p>
            </aside>
        ) : <> </>
        , [active])

    return { Popup, showPopup };
}