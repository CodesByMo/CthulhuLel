import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

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

    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(json => {
                    this.setState({ loading: true });
                    setTimeout(() => {
                        this.setState({ done: true });
                    }, 1200);
                });
        }, 1500);
    }

    render() {
        return (
            <div>
                {!this.state.done ? (
                    <FadeIn>
                        <div class="d-flex justify-content-center align-items-center">
                            {/* <h1>fetching pizza</h1> */}
                            {/* {!this.state.loading ? ( */}
                            <Lottie options={defaultOptions} height={100} width={100} />
                            {/* ) : ( */}
                            {/* <Lottie options={defaultOptions2} height={200} width={200} /> */}
                            {/* )} */}
                        </div>
                    </FadeIn>
                ) : (
                        <h1>hello world</h1>
                    )}
            </div>
        );
    }
}