import styled from "styled-components";

const Base = styled.div`
    height: 2px;  
    width: 250px;
    background:white;
    margin-left: 80px;
`;
const VerticalLine = styled.div`
    height: 250px;  
    width: 2px;
    background:white;
    margin-left: 150px;
`;
const HorizontalLine = styled.div`
    height: 2px;  
    width: 165px;
    background:white;
    position: absolute;
    right: 60px;
    top:0;
`;

const Small = styled.div`
    height: 40px;  
    width: 2px;
    background:white;
    margin-left: 150px;
    position: absolute;
    top: 0;
    right:60px;
`;

const Head = styled.div`
    height: 30px;  
    width: 30px;
    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    top: 40px;
    right:45px;
`;

const Body = styled.div`
    height: 90px;  
    width: 2px;
    background:white;
    position: absolute;
    top: 75px;
    right:60px;
`;

const RightArm = styled.div`
    height: 2px;  
    width: 50px;
    background:white;
    position: absolute;
    top: 90px;
    right:15px;
    rotate:30deg;
`;

const LeftArm = styled.div`
    height: 2px;  
    width: 50px;
    background:white;
    position: absolute;
    top: 90px;
    right:58px;
    rotate:-30deg;
`;

const RightLeg = styled.div`
    height: 2px;  
    width: 50px;
    background:white;
    position: absolute;
    top: 185px;
    right:24px;
    rotate:60deg;
`;
const LeftLeg = styled.div`
    height: 2px;  
    width: 50px;
    background:white;
    position: absolute;
    top: 185px;
    right: 48px;
    rotate:-60deg;
`;

const PartesDoBoneco = [Head,Body,RightArm,LeftArm, RightLeg,LeftLeg]

interface HangmanDrawingProps {
    numberOfGuesses:number;
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div style={{ position: 'relative',
         }}>
             {PartesDoBoneco.slice(0, numberOfGuesses).map((ParteDoBoneco, index) => {
                return <ParteDoBoneco key={index} />;
            })}
            <Small/>
            <HorizontalLine/>
            <VerticalLine/>
            <Base />
        </div>
    );
}
