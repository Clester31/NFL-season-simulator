/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import GearSelector from './GearSelector'; // Import the new GearSelector component

export default function UniformSelector({ team, location }: { team: string, location: string }) {
    const [helmet, setHelmet] = useState<string[]>([]);
    const [jersey, setJersey] = useState<string[]>([]);
    const [pants, setPants] = useState<string[]>([]);
    const [socks, setSocks] = useState<string[]>([]);

    const [hideButtons, setHideButtons] = useState<boolean>(false);

    useEffect(() => {
        loadImages({ team, gear: "Helmet", setImageArray: setHelmet });
        loadImages({ team, gear: "Jersey", setImageArray: setJersey });
        loadImages({ team, gear: "Pants", setImageArray: setPants });
        loadImages({ team, gear: "Socks", setImageArray: setSocks });
    }, [team]);

    return (
        <div className="p-2">
            <GearSelector gear="Helmet" images={helmet} hideButtons={hideButtons} location={"home"} />
            <GearSelector gear="Jersey" images={jersey} hideButtons={hideButtons} location={"home"} />
            <GearSelector gear="Pants" images={pants} hideButtons={hideButtons} location={"home"} />
            <GearSelector gear="Socks" images={socks} hideButtons={hideButtons} location={"home"}/>
            <button onClick={() => setHideButtons(!hideButtons)}>Hide buttons</button>
        </div>
    );
}

async function loadImages({ team, gear, setImageArray }: {
    team: string;
    gear: string;
    setImageArray: React.Dispatch<React.SetStateAction<string[]>>
}) {
    const updateUniforms = async () => {
        for (let i = 1; i <= 5; i++) {
            const url = `uniforms/${team}/${gear}/${team}_${gear.toUpperCase()}_${i}.png`;
            // Check if the image URL is valid
            const img = new Image();
            img.src = url;
            img.onload = () => {
                setImageArray(prev => [...prev, url]);
            };
            img.onerror = () => {
                
            };
            await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 0.5 seconds before checking the next image
        }
    };
    updateUniforms();
}
