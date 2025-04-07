import styled from 'styled-components';

export default function StyledWrapper({ id, gameName, background_image }) {
    const StyledWrapper = styled.div`
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
            color: coral;
        }

        .flip-card-front {
            background-image: ${(props) => `url(${background_image})`};
            background-size: cover;
            background-position: center;
        }

        .flip-card-back {
            background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%, bisque 40%, rgb(255, 185, 160) 78%);
            color: white;
            transform: rotateY(180deg);
        }
    `;
    return (
        <StyledWrapper key={id}>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">FLIP CARD</p>
                        <h1> {gameName}</h1>
                    </div>
                    <div className="flip-card-back">
                        <p className="title">BACK</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}
