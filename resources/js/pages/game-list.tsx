import { type Response } from '@/types';
import { useEffect } from 'react';
export default function GameList({ apiKey }) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://api.rawg.io/api/platforms?key=';

                const response = await fetch(`${url}${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Response[] = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="text-3xl font-bold underline">Game List</h1>
            <p className="mt-4">This is the game list page.</p>
        </div>
    );
}
