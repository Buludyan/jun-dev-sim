import React, {FC, useState} from 'react';
import './HelpWebsite.scss';
import {useAppSelector} from '../../../hooks/storeSelector';
import {IUsedPiecesDescriptions} from '../../../interfaces/interfaces';
import {changeFromNameToEndpoint} from '../../../helpers/helpers';
import queue from '../../../../assets/queue.png';

interface IHelpWebsite {
  pieces: IUsedPiecesDescriptions[];
}

export const HelpWebsite: FC<IHelpWebsite> = ({pieces}) => {
  const {isActive} = useAppSelector(state => state.helpWebsite);

  const [data, setData] = useState<{name: string; description: string} | null>(null);
  const [address, setAddress] = useState('queueflow.com');

  const onPieceClickHandler = (pieceName: string) => {
    const currentPiece = pieces.find(piece => piece.name === pieceName);
    if (currentPiece) {
      setData({name: currentPiece.name, description: currentPiece.description});
    }
    setAddress(`queueflow.com/${changeFromNameToEndpoint(pieceName)}`);
  };

  const onCloseHandler = () => {
    setAddress('queueflow.com');
    setData(null);
  };

  return (
    <div className={isActive ? 'opened' : 'closed'}>
      <div className="helpWebsite">
        <div className="helpWebsite__inner">
          <div className="helpWebsite__page">
            <div className="helpWebsite__head">
              <div className="helpWebsite__tab">
                <img className="helpWebsite__logo" src={queue}></img>
                <p>Queue flow</p>
              </div>
            </div>
            <div className="helpWebsite__address">
              <div className="helpWebsite__address-input">{address}</div>
            </div>
            {data ? (
              <div className="helpWebsite__descriptionBlock">
                <button onClick={onCloseHandler}>Go back</button>
                <div>{data.name}</div>
                <div>{data.description}</div>
              </div>
            ) : (
              <div className="helpWebsite__piecesBlock">
                <div className="helpWebsite__piecesList">
                  {pieces.slice(0, Math.floor(pieces.length / 2)).map((piece, idx) => {
                    return (
                      <div className="helpWebsite__piece" key={idx} onClick={() => onPieceClickHandler(piece.name)}>
                        {piece.name}
                      </div>
                    );
                  })}
                </div>
                <div className="helpWebsite__piecesList">
                  {pieces.slice(Math.floor(pieces.length / 2), pieces.length).map((piece, idx) => {
                    return (
                      <div className="helpWebsite__piece" key={idx} onClick={() => onPieceClickHandler(piece.name)}>
                        {piece.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
