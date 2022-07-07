import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import { Photo } from '../../services/albums';

import * as S from './styles';

interface LightBoxProps {
  isOpen: boolean;
  onRequestClose: () => void;
  photos: Photo[];
  activeSlideId: number;
  setActiveSlideId: (slideId: number) => void;
}

export function LightBox({
  isOpen, onRequestClose, photos, activeSlideId, setActiveSlideId,
}: LightBoxProps) {
  if (!isOpen) {
    return null;
  }

  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    sliderRef.current?.slickGoTo(5);
  }, [activeSlideId]);

  return ReactDOM.createPortal(
    <S.Overlay onMouseDown={onRequestClose}>
      <S.Wrapper onMouseDown={(e) => e.stopPropagation()}>
        <Slider
          afterChange={(index) => setActiveSlideId(index)}
          className="slider-container"
          slidesToShow={1}
        >
          {photos.map((photo) => (
            <S.SliderItem>
              <img src={photo.url} alt={photo.title} />
            </S.SliderItem>
          ))}
        </Slider>
      </S.Wrapper>
    </S.Overlay>,
    document.getElementById('lightbox-modal') as HTMLElement,
  );
}
