import StyledWrapper from '@/components/StyledWrapper';
import { type Response } from '@/types';
import { useEffect, useState } from 'react';
export default function GameList({ apiKey }) {
    const [gamesList, setGamesList] = useState<Games[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://api.rawg.io/api/games?key=';

                const response = await fetch(`${url}${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Response[] = await response.json();
                /* r */
                setGamesList(data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="container">
                <h1 className="text-3xl font-bold underline">Game List</h1>
                <p className="mt-4">This is the game list page.</p>
            </div>
            {!gamesList ? (
                <div>Loading...</div>
            ) : (
                gamesList.map((game) => (
                    <>
                        <div className="container mx-auto flex flex-col px-4 py-6">
                            <StyledWrapper key={game.key} gameName={game.name} />
                        </div>
                    </>
                ))
            )}
        </>
    );
}
