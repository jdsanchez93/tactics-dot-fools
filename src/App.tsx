import React, { useEffect, useState } from 'react';
import './App.css';
import { Augment } from './augment/Augment';

function App() {
  const [augments, setAugments] = useState<any>();


  const myUrl = 'https://garage-pi-webcam-images.s3.us-west-1.amazonaws.com/6e4f64ad-1874-4eb4-989d-f89fb32da485.png?X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMSJGMEQCIBX7tidkV20QPSxanC4NSf54OAudOfGeolqdINnYpGZnAiAczUUg56a3VscgF2sTfylr5PNbdJrNpjYqfwHv%2FXWeySrbBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDcyNjIzODk3NjU1OSIMGwZN%2FW%2BmN%2Bz6Afo8Kq8EuaQjwiVU3rpsSI7O1NRqEM1G%2BZIlfxoJ5ESeQq5n%2FUnj5eH1xyzGD%2FBcstv5rpXh8nOu67lWog0p8dHSEJPW%2F5u9Dnlt6UZ4NQOjR5cmTIXqFb0%2Bw3u7XMceTuIWXXMAyrEOJ5iLBYPkHnEcsY80jbDmKEKEAjlKEbsiVS12W2i%2BGZRi83gSgHpzYUxPXjBp50SBSYYHFvVGg9hyb4NcLySyE1QaLh7MfMVNClR1cZac%2FIcd8bROFo1aq2oLDrD3V4Piwtleue3c6gQLNTpkFtAQ%2FfVrkpY%2FoZieTjOLZnK4VdVPO6Z0faYQfPrwL5AJZxvEcLJEJsiiHn5PX7RBjNkFQCBv9MrYXAYPdi8f1xJ8pcMHLJJ1kbCUiB0bSIcJ9AiM9k3kiFv7g2%2BigDMeIHV79fq1AqW2r%2FAuYcMT6o8imnqTvuvIRnGaCb2iGxx2BaNHTJM3M2cm2qJCTGDbRu9k4Tfryi6%2BzXrXx0%2Bn509Lntzw0jtZ%2BWcd6f9%2B7j7K996pxPbGluu2yaX8tw0AMFMrMEKkIAOpbZ6vSW7f7WBTm8pDmTvbRchX6o82R4LHKvaGR2DOprBYiqTTckOW%2FlGaFvm9WeseqCnYOtd4h%2FQL3bewxMaG8R39NSE9UAicXgfyPe0j3iAwL2PXC14FkuctUwruL4%2FI6VB656iGQya9%2B4SRqYk2cf5OlyfgkU9Qolo8PWdDORRANwdDRD2UZyW5vR2zgXZF9M4rqTh8rTDTnfeWBjqqAf3Kb6Cx1nbIGzAnwqS4Qoa5od129BJTk6yDtSOUO3QojpP0hGO1xcu2dNHily8MzOzz2lgUOyA1s2pwI4v9SEH4rkZsdLoCWzmFnFZNws7tLnkOeSU4GijUfWW86sbAcleK9ZMcQK5yUeABNbO%2FPCGZ0LyhXQvTg731yJWPzmdXdKaU1lpgANyKxjfP1%2F48DmqmlZ8igyfC5FWGgC167Rr7lMIQrnaL%2FLDv&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA2SFZXLIXTPRV25NR/20220724/us-west-1/s3/aws4_request&X-Amz-Date=20220724T231910Z&X-Amz-SignedHeaders=host&X-Amz-Signature=a9364a4f481e3e7ad6db8ebd809e53ed1e2600d0f0da2309a7994a85c008d5e1'

  useEffect(() => {


    overwolf.games.events.getInfo((x: overwolf.games.events.GetInfoResult) => {
      console.log('getInfo', x);

      const matchInfo = x.res.match_info;

      if (x.error || matchInfo === undefined) {
        console.error('getInfo error', x);
        return;
      }

      //TODO get stage from match info
      console.log(matchInfo.round_type);
      
      let augmentsString = x.res.me.me as string;
      console.debug(augmentsString);

      //this needs a comma stripped in order to become valid json
      augmentsString = augmentsString.replace('}, }', '} }');

      let augments = JSON.parse(augmentsString);
      console.log('augments', augments);

      console.log(augments.augment_1);
      console.log(augments.augment_2);
      console.log(augments.augment_3);

      setAugments(augments);

    });
  });

  return (
    <div className="App">
      <h1 className='App-header'>TODO</h1>
      <div>
        <Augment name={augments.augment_1.name} url={myUrl}></Augment>
      </div>
    </div>
  );
}

export default App;
