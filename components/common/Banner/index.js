import React, { useEffect, useReducer, Children } from 'react';
import classnames from 'classnames';
import { useSwipeable } from 'react-swipeable';
import LoaderBanner from '../LoaderBanner';

function previous(length, current) {
  return (current - 1 + length) % length;
}

function next(length, current) {
  return (current + 1) % length;
}

function threshold(target) {
  const width = target.clientWidth;
  return width / 10;
}

const initialCarouselState = {
  offset: 0,
  desired: 0,
  active: 0
};

function carouselReducer(state, action) {
  switch (action.type) {
    case 'jump':
      return {
        ...state,
        desired: action.desired,
        type: action.type
      };
    case 'next':
      return {
        ...state,
        desired: next(action.length, state.active),
        type: action.type
      };
    case 'prev':
      return {
        ...state,
        desired: previous(action.length, state.active),
        type: action.type
      };
    case 'done':
      return {
        ...state,
        offset: NaN,
        active: state.desired,
        type: action.type
      };
    case 'drag':
      return {
        ...state,
        offset: action.offset,
        type: action.type
      };
    default:
      return state;
  }
}

function swiped(e, dispatch, length, direction) {
  const t = threshold(e.event.target);
  const d = direction * -e.deltaX;

  if (d >= t) {
    dispatch({
      type: direction > 0 ? 'next' : 'prev',
      length
    });
  } else {
    dispatch({
      type: 'drag',
      offset: 0
    });
  }
}

function useCarousel(length, interval = 8000, transitionTime = 300) {
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);

  const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, 0, 0.265, 1.55)`;
  const smooth = `transform ${transitionTime}ms ease-out`;
  const lengthWithClones = length + 2;

  const handlers = useSwipeable({
    onSwiping(e) {
      dispatch({
        type: 'drag',
        offset: e.deltaX
      });
    },
    onSwipedLeft(e) {
      swiped(e, dispatch, length, 1);
    },
    onSwipedRight(e) {
      swiped(e, dispatch, length, -1);
    },
    trackMouse: true,
    trackTouch: true
  });

  useEffect(() => {
    if (interval) {
      const id = setTimeout(() => dispatch({ type: 'next', length }), interval);
      return () => clearTimeout(id);
    }
  }, [state.offset, state.active, interval]);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'done' }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const style = {
    transform: 'translateX(0)',
    width: `${100 * lengthWithClones}%`,
    left: `-${(state.active + 1) * 100}%`
  };

  const slideDistance = Math.abs(state.active - state.desired);
  const desiredDirectionOnSwipe = Math.sign(state.offset || 0);

  const direction = (slideDistance > length / 2 ? 1 : -1) * Math.sign(state.desired - state.active);

  const shift = (100 * (desiredDirectionOnSwipe || direction)) / lengthWithClones;

  if (state.desired !== state.active) {
    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  } else if (state.type === 'drag') {
    if (state.offset !== 0) {
      style.transform = `translateX(${state.offset}px)`;
    } else {
      style.transition = elastic;
    }
  }

  return [state.active, (n) => dispatch({ type: 'jump', desired: n }), handlers, style];
}

const Carousel = ({ children, interval, transitionTime, hasControls = true }) => {
  const slides = Children.toArray(children);
  const length = slides.length;

  const [active, setActive, handlers, style] = useCarousel(length, interval, transitionTime);

  const handleSetActive = (index) => () => {
    setActive(index);
  };

  return (
    <div className="component-carousel">
      <div className="component-carousel__container">
        <div
          className="carousel-arrows__arrow carousel-arrows__arrow--left"
          onClick={handleSetActive((active - 1 + length) % length)}>
          <span><i className="fa fa-angle-right"></i></span>
        </div>

        <div className="component-carousel__content" {...handlers} style={style}>
          <div className="carousel-container__slide">{slides[length - 1]}</div>
          {slides.map((slide, index) => (
            <div
              className={classnames('carousel-container__slide', {
                active: active === index
              })}
              key={index}>
              {slide}
            </div>
          ))}
          <div className="carousel-container__slide">{slides[0]}</div>
        </div>

        <div
          className="carousel-arrows__arrow carousel-arrows__arrow--right"
          onClick={handleSetActive((active + 1) % length)}>
          <span>&rarr;</span>
        </div>

        {hasControls && (
          <div className="carousel-arrows">
            <ul className="carousel__indicators">
              {slides.map((slide, index) => {
                return (
                  <li key={index}>
                    <div
                      className={
                        index === active
                          ? 'carousel__indicator carousel__indicator--active'
                          : 'carousel__indicator'
                      }
                      onClick={handleSetActive(index)}></div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Banner = (props) => {
  const { dataBanner } = props;
  return (
    <React.Fragment>
      {dataBanner && dataBanner.length > 0 ? (
        <Carousel>
          {dataBanner.map((item) => {
            return (
              <div className="image-container" key={item.id}>
                <img src={item.image} alt={`img-${item.id}`} />
              </div>
            );
          })}
        </Carousel>
      ) : (
        <LoaderBanner />
      )}
    </React.Fragment>
  );
};

export default Banner;
