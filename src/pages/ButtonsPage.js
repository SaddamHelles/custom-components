import React from 'react';

import Button from '../components/ui/Button';
import { GoBell } from 'react-icons/go';
import { GoCloudDownload } from 'react-icons/go';
import { GoDatabase } from 'react-icons/go';
import { GoDeviceMobile } from 'react-icons/go';

const ButtonsPage = () => {
  return (
    <div>
      <Button
        onClick={() => console.log('Mouse Clicked!')}
        onMouseMove={() => console.log('onMouseMove happend!')}
        primary
        outline
        className="m-2"
      >
        <GoBell />
        Bay Now!
      </Button>
      <Button className="m-2" success rounded>
        <GoDeviceMobile />
        Go Out!
      </Button>
      <Button className="m-2" secondary rounded outline>
        Outline <GoCloudDownload />
      </Button>
      <Button className="m-2" warning rounded outline>
        Warning <GoDatabase />
      </Button>
    </div>
  );
};

export default ButtonsPage;
