import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";

// bootstrap & css 
import "bootstrap/dist/css/bootstrap.css";
import './loading.css';

import * as pipeAnim from "../../Lottie/pipe-always/pipe.json";
import * as doneData from "../../Lottie/done/done.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: pipeAnim.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined
    };
  }

  render() {
    return (
      <div id="loading">
        <FadeIn>
          <div className="d-flex justify-content-center align-items-center">
            {/* <h1>fetching pizza</h1> */}
            {!this.state.loading ? (
              <Lottie options={defaultOptions} height={100} width={100} />
            ) : (
                <Lottie options={defaultOptions2} height={200} width={200} />
              )}
          </div>
        </FadeIn>
      </div>
    );
  }
}
