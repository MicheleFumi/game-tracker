// StyledWrapper.tsx o StyledWrapper.jsx
import styled from 'styled-components';

const CardWrapper = styled.div<{ $bg: string }>`
    .flip-card {
        background-color: transparent;
        width: 190px;
        height: 254px;
        perspective: 1000px;
        font-family: sans-serif;
    }

    .title {
        font-size: 1.5em;
        font-weight: 900;
        text-align: center;
        margin: 0;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
        box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border: 1px solid coral;
        border-radius: 1rem;
        color: white;
    }

    .flip-card-front {
        background-image: url(${(props) => props.$bg});
        background-size: cover;
        background-position: center;
    }

    .flip-card-back {
        background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%, bisque 40%, rgb(255, 185, 160) 78%);
        transform: rotateY(180deg);
        overflow-y: auto; /* Abilita lo scroll verticale */
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;

export default function StyledWrapper({ gameName, background_image, released, rating, platforms }) {
    return (
        <CardWrapper $bg={background_image}>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front title">
                        <h1>{gameName}</h1>
                    </div>
                    <div className="flip-card-back">
                        <p className="title">DETAILS</p>
                        <p>Release Date: {released}</p>
                        <p>Rating: {rating} /5</p>
                        {!platforms ? (
                            <div className="text-center text-xl font-semibold">Loading...</div>
                        ) : (
                            <>
                                <div>Available For:</div>
                                {platforms.map((platform) => (
                                    <div key={platform.platform.id}>{platform.platform.name}</div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </CardWrapper>
    );
}
