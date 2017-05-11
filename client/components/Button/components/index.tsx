import * as React from 'react';
import * as _ from 'lodash';
import * as html2canvas from 'html2canvas';
require('./index.scss');

interface PropsList {
  color:string;
  changeColor:any;
  getTestData:any;
  getServerColor:any;
  changeColorServer:any;
};
interface StateList {};

export default class Button extends React.Component<PropsList, StateList> {
  constructor(args:any) {
    super(args);
    this.state = {
      color: 23
    };
  }

  componentWillReceiveProps(nextProps:any) {
    if (!_.isEqual(nextProps, this.props)) {
    }
  }
  
  changeColor (color:string) {
    this.setState({color: color});
    try {
      this.props.changeColor(color);
    } catch(error) {console.log(error);}
  }

  getTestData() {
    this.props.getTestData();
  }

  getServerColor() {
    this.props.getServerColor(this.props.changeColorServer);
  }

  screenShot() {
    console.log(html2canvas);
    // let nnoo:HTMLElement = document.getElementById('content');
    const element = document.getElementById('content');
    if (!(element instanceof HTMLElement)) {
      return;
    }
    html2canvas(element, ({
      useCORS: true,
      onrendered: function (canvas:any) {
        var url = canvas.toDataURL();
        //以下代码为下载此图片功能
        // var triggerDownload = $("<a>").attr("href", url).attr("download", getNowFormatDate() + "异常信息.png").appendTo("body");
        // triggerDownload[0].click();
        // triggerDownload.remove();
        console.log(url);
        let img = document.createElement('img');
        img.src = url;
        element.appendChild(img);
      }
    } as any));
  }

  render () {
    return (
      <div>
        <button onClick={()=> this.changeColor('yellow')}>变黄</button>
        <button onClick={()=> this.changeColor('blue')}>变蓝</button>
        <button onClick={() => this.getTestData()}>getTestData</button>
        <button onClick={() => this.getServerColor()}>从服务器获取颜色</button>
        <button onClick={() => this.screenShot()}>截图</button>
      </div>
    );
  }
}


