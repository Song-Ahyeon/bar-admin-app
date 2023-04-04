import React from "react";

const QnA = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      
    return (<>
    <p>QnA Page</p>
    </>)
}

export default QnA;