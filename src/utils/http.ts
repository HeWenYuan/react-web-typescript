export class http {
  private url:string; // url地址
  private method:string; // 调用接口的方法,get,post,put,del
  private data:any; // 需要向server传送的数据
  private xhr:any; // XMLHttpRequest对象
  private cb:Function; // 获取服务器返回以后的回调函数
  constructor (url:string, method:string, data:any, cb:Function) {
    this.url = url; 
    this.method = method; 
    this.data = data; 
    this.xhr = new XMLHttpRequest(); 
    this.cb = cb; 
  }

  public request () {
    let xhr = this.xhr;
    let url = this.url;
    let method = this.method;
    let data = this.data;
    let cb = this.cb;
    if (method === "get" || method === "GET") {
      if (!this.isEmptyObject(data)) {
        url += "?";
        for (let key in data) {
          url += key + "=" + data[key] + "&";
        }
        url = url.substring(0, url.lastIndexOf("&"));
      }
      xhr.open("get", url, true);
      xhr.send(null);
      
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
          console.log(cb);
          cb(JSON.parse(xhr.responseText));
        }
      };
      
    } else if (method === "post" || method === "POST") {

    } else {

    }
  }

  public get() {}

  public post() {}

  public del() {}

  private isEmptyObject(obj:any) {
    for (let key in obj) {
      return false;
    };
    return true;
  }
}

export function getTestData () {
  let cb = (res:any) => {
    console.log(res);
  };
  let rq = new http("/get_test_data", "get", {}, cb);

  rq.request();
}