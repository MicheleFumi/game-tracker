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
                setGamesList(data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="container mx-auto px-4 py-6">
                <h1 className="mb-6 text-center text-3xl font-bold">Game List</h1>
                <p className="mb-8 text-center text-lg">This is the game list page.</p>

                {!gamesList ? (
                    <div className="text-center text-xl font-semibold">Loading...</div>
                ) : (
                    <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {gamesList.map((game) => (
                            <StyledWrapper key={game.key} gameName={game.name} background_image={game.background_image} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
