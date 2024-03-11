import React, {useContext} from 'react'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import leftArrow from '../Assets/icon/left-arrow.png';
import rightArrow from '../Assets/icon/right-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={leftArrow} alt="left-arrow" />
    </Typography>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={rightArrow} alt="right-arrow" />
    </Typography>
  );
};
const HorizontalScrollBar = ({data,bodyPart,setBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
          <Box key={item.id || item}
          itemId={item.id || item}
          title={item.id || item} m="0 40px">
              <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
          </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollBar